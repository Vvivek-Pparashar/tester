import React, { useState } from "react";
import Webcam from "react-webcam";

const App = () => {

  const [face, setFace] = useState("user");
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: face,
  };
  const webcamRef = React.useRef(null);

  return (
    <>
      <Webcam
        audio={false}
        height={720}
        screenshotFormat="image/jpeg"
        width={120}
        mirrored={face === "user" ? true : false}
        videoConstraints={videoConstraints}
      ></Webcam>

      <button onClick={()=>setFace(face === "user" ? "environment" : "user")}>Switch</button>
    </>
  );
};

export default App;
