import React from "react";
import { useParams } from "react-router-dom";

const ContentsView = () => {
  const { id } = useParams();
  console.log(id);
  return <div>this is view</div>;
};

export default ContentsView;
