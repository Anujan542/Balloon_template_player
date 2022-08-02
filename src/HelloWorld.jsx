import { AbsoluteFill, continueRender, delayRender, Sequence } from "remotion";
import { getVideoMetadata } from "@remotion/media-utils";
import Balloons from "./components/Effects/Balloons";
import { FadeTransition } from "./components/Effects/FadeTransition";
import BalloonEffect from "./components/FirstLayer/BalloonEffect";
import Balloon1 from "./components/FirstLayer/Balloons/Balloon1";
import Balloon2 from "./components/FirstLayer/Balloons/Balloon2";
import Balloon3 from "./components/FirstLayer/Balloons/Balloon3";
import BalloonTest from "./components/FirstLayer/BalloonTest";
import Image from "./components/FirstLayer/Image";
import { ParagraphTitle } from "./components/FirstLayer/ParagraphTitle";
import UnderScorePath from "./components/FirstLayer/UnderscorePath";
import Intro from "./components/Intro/Intro";
import OutroMain from "./components/Outro/OutroMain";
import StudentPersonalVideo from "./components/SecondLayer/StudentPersonal";

import "animate.css";
import { AudioSound } from "./components/Audio/main";
import StudentVideo from "./components/StudentVideo/StudentVideo";
import { useEffect, useState } from "react";

export const BalloonTemplate = () => {
  const color1 = "#567d2e";
  const color2 = "#ffb300";

  return (
    <>
      <AbsoluteFill
        style={{
          display: "flex",
          backgroundImage:
            "url(https://allfreedesigns.com/wp-content/uploads/2015/06/black-patterns-17.jpg)",
        }}
      >
        <Sequence from={0} durationInFrames={130}>
          <Intro />
        </Sequence>
        <Sequence from={128} durationInFrames={302}>
          <FadeTransition type="in" duration={30}>
            {/* <BalloonEffect color1="#567d2e" color2="#ffb300" /> */}
            <Balloon1 color1={color2} />
          </FadeTransition>
        </Sequence>
        <Sequence from={140} durationInFrames={290}>
          <Balloon2 color2={color1} />
        </Sequence>
        <Sequence from={150} durationInFrames={280}>
          <Balloon3 />
        </Sequence>
        <Sequence from={150} durationInFrames={280}>
          <Image />
        </Sequence>
        <Sequence from={200} durationInFrames={230}>
          <UnderScorePath color="white" />
        </Sequence>
        <Sequence from={250} durationInFrames={180}>
          <ParagraphTitle
            x={2}
            y={750}
            text="Thank you to my family for the endless support throughout my"
            marginLeft="17.5rem"
            titleColor="white"
            titleText="Bachelor of Science"
            size="17px"
            fontWeight={0}
          />
        </Sequence>
        <Sequence from={270} durationInFrames={160}>
          <ParagraphTitle
            x={2}
            y={800}
            text="undergrad career. Im also thankful for my friends who helped get me"
            marginLeft="16rem"
            titleColor="white"
            titleText="Bachelor of Science"
            size="17px"
            fontWeight={0}
          />
        </Sequence>
        <Sequence from={290} durationInFrames={140}>
          <ParagraphTitle
            x={2}
            y={850}
            text="here <3"
            marginLeft="30rem"
            titleColor="white"
            titleText="Bachelor of Science"
            size="17px"
            fontWeight={0}
          />
        </Sequence>
        <Sequence from={420} durationInFrames={20}>
          <Balloons color1={color1} color2={color2} />
        </Sequence>
        <Sequence from={440} durationInFrames={665}>
          <StudentVideo title="ANUJAN NESARAJAH" speed={1} volume={1} />
          {/* <StudentPersonalVideo title="#Bport2022" volume={1} /> */}
        </Sequence>
        <Sequence from={1105} durationInFrames={20}>
          <Balloons color1={color1} color2={color2} />
        </Sequence>
        <Sequence from={1125} durationInFrames={530}>
          <StudentVideo title="#NPCGrad" speed={0.7} volume={0} />
          {/* <StudentPersonalVideo title="#Bport2022" volume={1} /> */}
        </Sequence>
        {/* <Sequence from={750}>
          <OutroMain />
        </Sequence> */}
        {/* <AudioSound /> */}
      </AbsoluteFill>
    </>
  );
};
