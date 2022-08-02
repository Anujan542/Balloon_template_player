import React from "react";
import {
  interpolate,
  AbsoluteFill,
  spring,
  useVideoConfig,
  useCurrentFrame,
} from "remotion";

import "./VideoBall.css";

const VideoBalloon3 = () => {
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
          marginLeft: "-38rem",
          marginTop: "39rem",
          transform: `translateY(${opacity}px)`,
        }}
      >
        <div className="video_balloon-g">
          <div className="Video_balloon" style={{ backgroundColor: "white" }}>
            <div className="balloon-ref"></div>
            {/* <span className="top-c"></span>
            <span className="left-c"></span> */}
          </div>
        </div>

        {/* <div className="video_balloon-g">
          <div
            className="balloon balloon-blue"
            style={{ backgroundColor: "white" }}
          >
            <div className="balloon-ref" />
            <div className="thread" style={{ backgroundColor: "white" }} />
          </div>
        </div> */}
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          marginLeft: "30rem",
          marginTop: "38rem",
          transform: `translateY(${opacity}px)`,
        }}
      >
        <div className="video_balloon-g">
          <div className="Video_balloon" style={{ backgroundColor: "white" }}>
            <div className="balloon-ref"></div>
            {/* <span className="top-c"></span>
            <span className="left-c"></span> */}
          </div>
        </div>
      </AbsoluteFill>
    </>
  );
};

export default VideoBalloon3;
