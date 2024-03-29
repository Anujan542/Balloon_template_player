import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import "./font.css";

const Title = ({
  titleText,
  titleColor,
  top,
  size,
  marginLeft,
  fontWeight,
  fontStyle,
  time,
}) => {
  const frame = useCurrentFrame();

  const charsShown = Math.floor(frame / time);
  const textToShow = titleText.slice(0, charsShown);
  return (
    <AbsoluteFill
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontFamily: "sans-serif",
          fontSize: size,
          titleColor,
          fontWeight,
          fontStyle,
          top,
          marginRight: "15rem",
          position: "absolute",
          color: titleColor,
        }}
      >
        {textToShow}
      </div>
    </AbsoluteFill>
  );
};

export default Title;
