import {
  interpolate,
  AbsoluteFill,
  spring,
  useVideoConfig,
  useCurrentFrame,
} from "remotion";

import React from "react";

import "./Balloon.css";

const BalloonEffect = ({ color1, color2 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    fps,
    frame,
    config: {
      mass: 10,
      damping: 200,
    },
  });

  const opacity = interpolate(progress, [0, 0.5], [500, 5], {
    extrapolateRight: "clamp",
  });
  return (
    <>
      <AbsoluteFill
        style={{
          marginLeft: "-10rem",
          transform: `translateY(${opacity}px)`,
        }}
      >
        <div className="ballon_container">
          <div
            className="ballon"
            id="balloon2"
            style={{ backgroundColor: color1 }}
          >
            <div className="thread" style={{ backgroundColor: color1 }} />
            <span class="top-c"></span>
          </div>
          <div
            className="ballon"
            id="balloon1"
            style={{ backgroundColor: "white" }}
          >
            <div className="thread" style={{ backgroundColor: "white" }} />
          </div>

          <div
            className="ballon"
            id="balloon3"
            style={{ backgroundColor: color2 }}
          >
            <div className="thread" style={{ backgroundColor: color2 }} />
          </div>
        </div>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          marginLeft: "60rem",
          transform: `translateY(${opacity}px)`,
        }}
      >
        <div>
          <div
            className="ballon"
            id="balloon2"
            style={{ backgroundColor: color1 }}
          >
            <div className="thread" style={{ backgroundColor: color1 }} />
          </div>
          <div
            className="ballon"
            id="balloon1"
            style={{ backgroundColor: color2 }}
          >
            <div className="thread" style={{ backgroundColor: color2 }} />
          </div>

          <div
            className="ballon"
            id="balloon3"
            style={{ backgroundColor: color2 }}
          >
            <div className="thread" style={{ backgroundColor: color2 }} />
          </div>
        </div>
      </AbsoluteFill>
    </>
  );
};

export default BalloonEffect;
