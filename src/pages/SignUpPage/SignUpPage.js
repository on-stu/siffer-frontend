import React, { useState } from "react";
import LogIn from "./pages/LogIn";
import Sign0 from "./pages/Sign0";
import SignUpWithEmail from "./pages/SignUpWithEmail";
import SignUpWithEmail2 from "./pages/SignUpWithEmail2";
import SignUpWithEmail3 from "./pages/SignUpWithEmail3";
import SignUpWithEmail4 from "./pages/SignUpWithEmail4";

const SignUpPage = () => {
  const [current, setCurrent] = useState(null);
  return (
    <>
      {current === null ? (
        <LogIn setCurrent={setCurrent} />
      ) : current === 0 ? (
        <Sign0 setCurrent={setCurrent} />
      ) : current === 1 ? (
        <SignUpWithEmail setCurrent={setCurrent} />
      ) : current === 2 ? (
        <SignUpWithEmail2 setCurrent={setCurrent} />
      ) : current === 3 ? (
        <SignUpWithEmail3 setCurrent={setCurrent} />
      ) : (
        current === 4 && <SignUpWithEmail4 setCurrent={setCurrent} />
      )}
    </>
  );
};

export default SignUpPage;
