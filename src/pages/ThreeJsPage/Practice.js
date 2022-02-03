import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import * as THREE from "three";

import { DDSLoader } from "three-stdlib";
import manObj from "../../objs/Man.obj";
import styled from "styled-components";
THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

function CoinMesh() {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z += 0.01));
  return (
    <mesh ref={mesh} scale={1}>
      <boxGeometry />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
}

function Scene() {
  const obj = useLoader(OBJLoader, "objs/Man.obj", (load) => console.log(load));

  return <primitive object={obj} scale={0.1} />;
}

const Practice = () => {
  return (
    <Container>
      <div className="canvas">
        <Canvas
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Suspense fallback={null}>
            {/* <CoinMesh /> */}
            <Scene />
            <OrbitControls />
          </Suspense>
          <ambientLight intensity={0.1} />
          <directionalLight />
        </Canvas>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  .canvas {
    width: 100%;
    height: 100%;
  }
`;

export default Practice;
