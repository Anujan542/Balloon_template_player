import React from "react";
import {
  interpolate,
  AbsoluteFill,
  spring,
  useVideoConfig,
  useCurrentFrame,
} from "remotion";

const Balloon3 = () => {
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
          marginTop: "-5rem",
          transform: `translateY(${opacity}px)`,
        }}
      >
        <div className="balloon-g">
          <div className="balloon" style={{ backgroundColor: "white" }}>
            <div className="balloon-ref"></div>
            {/* <span className="top-c"></span>
            <span className="left-c"></span> */}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg3059"
          viewBox="0 0 263.16 923.89"
          version="1.1"
          style={{ marginLeft: "2rem" }}
        >
          <defs id="defs3061">
            <filter
              id="filter3961"
              height="1.2083"
              width="1.4792"
              colorInterpolationFilters="sRGB"
              y="-.10416"
              x="-.23960"
            >
              <feGaussianBlur
                id="feGaussianBlur3963"
                stdDeviation="14.438448"
              />
            </filter>
          </defs>
          <g id="layer1" transform="translate(-651.28 -35.633)">
            <g id="g3277">
              <path
                id="path3971"
                style={{ stroke: "white", fill: "none" }}
                strokeWidth="9"
                d="m778.09 478.47 8.8541 0.37743c-6.9021 14.109-13.429 28.402-19.571 42.858-7.9339 18.674-15.259 37.733-19.306 57.615-4.0467 19.882-4.7158 40.732 0.59059 60.315 4.6071 17.002 13.508 32.459 21.165 48.323 7.6578 15.864 14.247 32.896 13.671 50.502-0.67203 20.553-11.067 39.607-23.638 55.881s-27.523 30.635-39.592 47.285c-24.408 33.675-36 76.408-31.956 117.8"
              />
            </g>
          </g>
        </svg>
        {/* <div className="balloon-g">
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
          marginTop: "-1rem",
          transform: `translateY(${opacity}px)`,
        }}
      >
        <div className="balloon-g">
          <div className="balloon" style={{ backgroundColor: "white" }}>
            <div className="balloon-ref"></div>
            {/* <span className="top-c"></span>
            <span className="left-c"></span> */}
          </div>
        </div>
      </AbsoluteFill>
    </>
  );
};

export default Balloon3;
