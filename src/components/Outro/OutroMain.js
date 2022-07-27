import React from "react";
import { AbsoluteFill, Img } from "remotion";
import out from "../assets/outro.jpeg";

const OutroMain = () => {
  return (
    <AbsoluteFill>
      <Img src={out} />
    </AbsoluteFill>
  );
};

export default OutroMain;
