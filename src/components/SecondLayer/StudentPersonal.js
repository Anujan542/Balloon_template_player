import {
  AbsoluteFill,
  Img,
  OffthreadVideo,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Video,
} from "remotion";
import styled from "styled-components";
import { StudentTitle } from "./StudentTitle";

const Container = styled(AbsoluteFill)`
  // background-color: #00bfff;
  flex-direction: row;
  /* justify-content: start;
  align-items: start; */
`;

const Left = styled.div`
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  padding-right: 0px;
`;

const Spacer = styled.div`
  width: 100px;
`;

const Row = styled.div`
  flex-direction: row;
  display: flex;
`;

const StudentPersonalVideo = ({ title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const config = useVideoConfig();

  const underscoreWidthRight = spring({
    from: 0,
    to: 3000,
    frame,
    fps,
    config: { mass: 10, damping: 500, stiffness: 40 },
  });
  return (
    <Container>
      <Row>
        <Left>
          <div
            style={{
              position: "relative",
              marginTop: "13rem",
              marginLeft: "20rem",
            }}
          >
            <Img
              style={{
                maxWidth: "300px",
                maxHeight: "200px",
                transform: `${underscoreWidthRight}`,
              }}
              src="https://www.brockport.edu/support/college_communications/identity/images/all_in_one_logo.jpg"
            />
            <StudentTitle
              title1={title}
              titleColor="white"
              top={200}
              size="45px"
            />
          </div>
        </Left>
        <Spacer />
        <Right>
          <>
            {/* <OffthreadVideo
              src={studentVideo}
              style={{
                marginTop: "2rem",
                maxHeight: "60%",
                maxWidth: "100%",
              }}
            /> */}
          </>
        </Right>
      </Row>
    </Container>
  );
};

export default StudentPersonalVideo;
