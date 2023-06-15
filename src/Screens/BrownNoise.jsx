import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./BrownNoise.css"

import audio from "../Assets/audiocheck.net_BrownNoise_15min.mp3"

const BrownNoise = (props) => {
  return (
    <div className="brownNoise">
      <ReactAudioPlayer
        src={audio}
        controls
      />
    </div>
  );
};

export default BrownNoise;
