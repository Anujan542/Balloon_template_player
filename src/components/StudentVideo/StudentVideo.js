import { Img, useCurrentFrame } from "remotion";
import React from "react";
import { AbsoluteFill, Video } from "remotion";
import video from "../assets/liveclip.mp4";

import { StudentGradTitle } from "./StudentGradTitle";
import Balloon1 from "../FirstLayer/Balloons/Balloon1";
import VideoBalloon1 from "./VideoBalloon/VideoBalloon1";
import VideoBalloon2 from "./VideoBalloon/VideoBalloon2";
import Balloon3 from "../FirstLayer/Balloons/Balloon3";
import VideoBalloon3 from "./VideoBalloon/VideoBalloon3";

const StudentVideo = ({ speed, volume, title }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        position: "relative",
      }}
    >
      <VideoBalloon3 />
      <VideoBalloon1 color1="#567d2e" />
      <Video volume={volume} playbackRate={speed} src={video} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            marginBottom: "13rem",
            backgroundImage:
              "url(https://allfreedesigns.com/wp-content/uploads/2015/06/black-patterns-17.jpg)",
            // background: "black",
            width: "1500px",
            height: "90px",
          }}
        >
          <VideoBalloon1 color1="#567d2e" />
          <VideoBalloon2 color2="#ffb300" />
          <StudentGradTitle gradTitle={title} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default StudentVideo;
