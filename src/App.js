import { Player } from "@remotion/player";
import React from "react";
import { BalloonTemplate } from "./HelloWorld";

const App = () => {
  return (
    <Player
      component={BalloonTemplate}
      durationInFrames={2000}
      compositionWidth={1280}
      compositionHeight={720}
      fps={36}
      controls
      style={{
        width: "100%",
      }}
    />
  );
};

export default App;
