import React, { useState } from "react";
import Webcam from "react-webcam";
const WebcamComponent = () => <Webcam />;

const App = () => {
  const [picture, setPicture] = useState("");
  const [face, setFace] = useState("environment")

  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: face,
  };

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  });
  return (
    <div>
      <h2 className="mb-5 text-center">
        React Photo Capture using Webcam Examle
      </h2>
      <div>
        {picture == "" ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            // facingMode = {face}
            mirrored={face==="user"?true:false}
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            capture()
          }}
        >
          Capture
        </button>
        <button onClick={(e)=>{
          e.preventDefault();
          setFace(face === "user" ? "environment" : "user")
        }}>Switch</button>
      </div>
    </div>
  );
};
export default App;
