import { AbsoluteFill, Sequence } from "remotion";
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
import StudentPersonalVideo from "./components/SecondLayer/StudentPersonal";

export const BalloonTemplate = () => {
  return (
    <AbsoluteFill style={{ display: "flex", backgroundColor: "#2c2c2c" }}>
      <Sequence from={0} durationInFrames={130}>
        <Intro />
      </Sequence>
      <Sequence from={128} durationInFrames={302}>
        <FadeTransition type="in" duration={30}>
          {/* <BalloonEffect color1="#567d2e" color2="#ffb300" /> */}
          <Balloon1 color1="#567d2e" />
        </FadeTransition>
      </Sequence>
      <Sequence from={140} durationInFrames={290}>
        <Balloon2 color2="#ffb300" />
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
          marginLeft="15rem"
          titleColor="white"
          titleText="Bachelor of Science"
          size="20px"
          fontWeight={0}
        />
      </Sequence>
      <Sequence from={270} durationInFrames={160}>
        <ParagraphTitle
          x={2}
          y={800}
          text="undergrad career. Im also thankful for my friends who helped get me"
          marginLeft="14rem"
          titleColor="white"
          titleText="Bachelor of Science"
          size="20px"
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
          size="20px"
          fontWeight={0}
        />
      </Sequence>
      <Sequence from={420} durationInFrames={20}>
        <Balloons color1="#567d2e" color2="#ffb300" />
      </Sequence>
      <Sequence from={440} durationInFrames={200}>
        <StudentPersonalVideo title="#Bport2022" />
      </Sequence>
    </AbsoluteFill>
  );
};
