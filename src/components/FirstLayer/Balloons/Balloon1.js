import {
  interpolate,
  AbsoluteFill,
  spring,
  useVideoConfig,
  useCurrentFrame,
} from "remotion";

import React from "react";
import "./Ball.css";

const Balloon1 = ({ color1 }) => {
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
          marginTop: "-10rem",
          transform: `translateY(${opacity}px)`,
        }}
      >
        {/* new balloon */}
        <div className="balloon-g">
          <div className="balloon" style={{ backgroundColor: color1 }}>
            <div className="balloon-ref"></div>
            {/* <span className="top-c"></span>
            <span className="left-c"></span> */}
          </div>
        </div>

        {/* other balloon */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="svg3059"
          viewBox="0 0 263.16 923.89"
          version="1.1"
          style={{ marginLeft: "2.5rem" }}
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
                style={{ stroke: color1, fill: "none" }}
                strokeWidth="10"
                d="m778.09 478.47 8.8541 0.37743c-6.9021 14.109-13.429 28.402-19.571 42.858-7.9339 18.674-15.259 37.733-19.306 57.615-4.0467 19.882-4.7158 40.732 0.59059 60.315 4.6071 17.002 13.508 32.459 21.165 48.323 7.6578 15.864 14.247 32.896 13.671 50.502-0.67203 20.553-11.067 39.607-23.638 55.881s-27.523 30.635-39.592 47.285c-24.408 33.675-36 76.408-31.956 117.8"
              />
            </g>
          </g>
        </svg>

        {/* <div className="balloon-g">
            <div className="balloon" style={{ backgroundColor: color1 }}>
              <div className="balloon-ref" />
            </div>
            <div className="thread" style={{ backgroundColor: color1 }} />
          </div> */}
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          marginLeft: "30rem",
          marginTop: "-10rem",
          transform: `translateY(${opacity}px)`,
        }}
      >
        <div className="balloon-g">
          <div className="balloon" style={{ backgroundColor: color1 }}>
            <div className="balloon-ref"></div>
            {/* <span className="top-c"></span>
            <span className="left-c"></span> */}
          </div>
        </div>
      </AbsoluteFill>

      {/* <AbsoluteFill
          style={{
            marginLeft: "-6rem",
            marginTop: "7rem",
            transform: `translateY(${opacity}px)`,
          }}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="480.000000pt"
            // Height="939.000000pt"
            viewBox="0 0 1280.000000 1139.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,1139.000000) scale(0.100000,-0.100000)"
              fill="#567d2e"
              stroke="none"
            >
              <path
                d="M6000 10685 c-168 -31 -367 -101 -530 -187 -611 -323 -1019 -941
-1121 -1697 -36 -271 -17 -556 56 -843 57 -224 124 -402 243 -648 225 -465
662 -1104 1009 -1477 145 -157 440 -373 507 -373 9 0 20 -9 26 -19 11 -22 -23
-89 -131 -255 -71 -110 -74 -126 -21 -126 21 0 43 -5 50 -12 10 -10 48 -19
155 -35 37 -5 38 -7 31 -32 -11 -35 -17 -4073 -6 -4114 9 -36 35 -47 48 -20 5
10 11 926 14 2065 3 1345 8 2050 15 2057 7 6 40 3 98 -11 l89 -20 39 38 c22
22 72 55 112 75 50 25 73 42 75 56 2 13 -22 52 -69 109 -93 116 -149 199 -149
221 0 12 18 26 57 43 203 87 479 354 773 745 239 319 489 717 646 1029 242
480 328 804 328 1226 -1 384 -37 615 -142 895 -49 132 -147 323 -225 440 -306
459 -799 789 -1298 870 -123 20 -569 20 -679 0z"
              />
            </g>
          </svg>
        </AbsoluteFill>

        <AbsoluteFill
          style={{
            marginLeft: "-19rem",
            marginTop: "7rem",
            transform: `translateY(${opacity}px)`,
          }}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="480.000000pt"
            // Height="939.000000pt"
            viewBox="0 0 1280.000000 1139.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,1139.000000) scale(0.100000,-0.100000)"
              fill="white"
              stroke="none"
            >
              <path
                d="M6000 10685 c-168 -31 -367 -101 -530 -187 -611 -323 -1019 -941
-1121 -1697 -36 -271 -17 -556 56 -843 57 -224 124 -402 243 -648 225 -465
662 -1104 1009 -1477 145 -157 440 -373 507 -373 9 0 20 -9 26 -19 11 -22 -23
-89 -131 -255 -71 -110 -74 -126 -21 -126 21 0 43 -5 50 -12 10 -10 48 -19
155 -35 37 -5 38 -7 31 -32 -11 -35 -17 -4073 -6 -4114 9 -36 35 -47 48 -20 5
10 11 926 14 2065 3 1345 8 2050 15 2057 7 6 40 3 98 -11 l89 -20 39 38 c22
22 72 55 112 75 50 25 73 42 75 56 2 13 -22 52 -69 109 -93 116 -149 199 -149
221 0 12 18 26 57 43 203 87 479 354 773 745 239 319 489 717 646 1029 242
480 328 804 328 1226 -1 384 -37 615 -142 895 -49 132 -147 323 -225 440 -306
459 -799 789 -1298 870 -123 20 -569 20 -679 0z"
              />
            </g>
          </svg>
        </AbsoluteFill> */}
    </>
  );
};

export default Balloon1;
