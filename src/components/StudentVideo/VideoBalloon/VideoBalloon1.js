import {
  interpolate,
  AbsoluteFill,
  spring,
  useVideoConfig,
  useCurrentFrame,
} from "remotion";

import React from "react";
import "./VideoBall.css";

const VideoBalloon1 = ({ color1 }) => {
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
      {/* Left Side */}

      <AbsoluteFill
        style={{
          marginLeft: "-30rem",
          marginTop: "0rem",
          transform: `translateY(${opacity}px)`,
        }}
      >
        <div className="video_balloon-g">
          <div className="Video_balloon" style={{ backgroundColor: color1 }}>
            <div className="balloon-ref"></div>
          </div>
        </div>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          marginLeft: "30rem",
          marginTop: "3rem",
          transform: `translateY(${opacity}px)`,
        }}
      >
        <div className="video_balloon-g">
          <div className="Video_balloon" style={{ backgroundColor: color1 }}>
            <div className="balloon-ref"></div>
            {/* <span className="top-c"></span>
            <span className="left-c"></span> */}
          </div>
        </div>
      </AbsoluteFill>
    </>
  );
};

export default VideoBalloon1;
