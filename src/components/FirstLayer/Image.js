import {
  interpolate,
  spring,
  useVideoConfig,
  useCurrentFrame,
  Img,
  AbsoluteFill,
  Sequence,
} from "remotion";

import styled from "styled-components";
import { MainTitle } from "./MainTitle";
import Title from "./Title";

import "./imageRotate.css";

const Container = styled(AbsoluteFill)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  justify-content: center;
  align-items: center;
  padding-right: 0px;
  margin-left: 650px;
`;

const Spacer = styled.div`
  width: 0px;
`;

const Row = styled.div`
  flex-direction: row;
`;

const Image = () => {
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

  const opacity = interpolate(progress, [0, 0.5], [500, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <Container>
      <Row>
        <Left>
          <Sequence from={15}>
            <MainTitle
              title1="James Fer"
              title2="Duckles"
              titleColor="white"
              top={150}
              size="50px"
              fontWeight={700}
              // marginLeft={370}
            />
          </Sequence>
          <Sequence from={25}>
            <Title
              titleColor="white"
              titleText="Bachelor of Science"
              top={300}
              size="30px"
              fontWeight={0}
              // marginLeft={350}
              time={3}
            />
          </Sequence>
          <Sequence from={30}>
            <Title
              titleColor="white"
              titleText="Cum Laude"
              top={350}
              size="20px"
              fontWeight={0}
              // marginLeft={390}
              time={7}
            />
          </Sequence>
        </Left>
        <Spacer />
        <Right>
          <div className="rotate">
            <Img
              src="https://pbs.twimg.com/media/FSrWJNcXwAEpINW.jpg"
              style={{
                borderBottom: "60px solid white",
                borderTop: "10px solid white",
                borderLeft: "10px solid white",
                borderRight: "10px solid white",
                maxWidth: "500px",
                maxHeight: "500px",
                //  transform: `translateY(${opacity}px)`,
              }}
            />
          </div>
        </Right>
      </Row>
    </Container>
  );
};

export default Image;
