import React from "react";
import Webcam from "react-webcam";

const App = () => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "environment",
  };
  const webcamRef = React.useRef(null);

  return (
    <Webcam
      audio={false}
      height={720}
      screenshotFormat="image/jpeg"
      width={120}
      videoConstraints={videoConstraints}
    ></Webcam>
  );
};

export default App;
