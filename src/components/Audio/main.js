import { Audio, useCurrentFrame } from "remotion";
import audio from "../assets/audio.wav";

export const AudioSound = () => {
  const frame = useCurrentFrame();
  return (
    <>
      <Audio src={audio} volume={frame >= 440 && frame <= 790 ? 0.1 : 1} />
    </>
  );
};
