import {
  interpolate,
  AbsoluteFill,
  spring,
  useVideoConfig,
  useCurrentFrame,
} from "remotion";

import "./BalloonTest.css";

import React from "react";

const BalloonTest = ({ color1, color2 }) => {
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
        <div className="balloon-g">
          <div className="balloon" style={{ backgroundColor: color1 }}>
            <div className="balloon-ref" />
          </div>
          <div className="thread" style={{ backgroundColor: color1 }} />
        </div>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          marginLeft: "-23rem",
          marginTop: "-5rem",
          transform: `translateY(${opacity}px)`,
        }}
      >
        <div className="balloon-g">
          <div
            className="balloon balloon-blue"
            style={{ backgroundColor: color2 }}
          >
            <div className="balloon-ref" />
            <div className="thread" style={{ backgroundColor: color2 }} />
          </div>
        </div>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          marginLeft: "-38rem",
          marginTop: "-5rem",
          transform: `translateY(${opacity}px)`,
        }}
      >
        <div className="balloon-g">
          <div
            className="balloon balloon-blue"
            style={{ backgroundColor: "white" }}
          >
            <div className="balloon-ref" />
            <div className="thread" style={{ backgroundColor: "white" }} />
          </div>
        </div>
      </AbsoluteFill>
      {/* <AbsoluteFill
        style={{
          marginLeft: "-12rem",
          marginTop: "3rem",
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
            fill="#ffb300"
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

      {/* Right Side */}

      <AbsoluteFill
        style={{
          marginLeft: "66rem",
          marginTop: "2rem",
        }}
      >
        <AbsoluteFill
          style={{
            marginLeft: "-12rem",
            marginTop: "3rem",
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
              fill="#ffb300"
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
        </AbsoluteFill>
      </AbsoluteFill>
    </>
  );
};

export default BalloonTest;
