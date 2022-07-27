import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import styled from "styled-components";

const Container = styled.p`
  font-size: 45px;
  text-align: center;
`;

export const ParagraphTitle = ({
  text,
  marginLeft,
  x,
  y,
  titleColor,
  top,
  size,
  fontWeight,
  fontStyle,
}) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const progress = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
  });

  const xxx = x;
  const yyy = y;

  const translateY = interpolate(progress, [0, xxx], [yyy, 0]);

  return (
    <Container
      style={{
        marginLeft,
      }}
    >
      <p
        style={{
          fontFamily: "sans-serif",
          transform: `translateY(${translateY}px)`,
          fontSize: size,
          titleColor,
          fontWeight,
          fontStyle,
          top,
          textAlign: "center",
          position: "absolute",
          color: titleColor,
        }}
      >
        {text}
      </p>
    </Container>
  );
};
