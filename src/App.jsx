import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./compornents/colorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(false);

  const OnclickBtn = () => {
    setNum(num + 1);
  };
  const OnclickSwitchBtn = () => {
    setfaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    // console.log("aaaaaa");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setfaceShowFlag(true);
      } else {
        faceShowFlag && setfaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <React.Fragment>
      <h1>こんにちは</h1>
      <ColorfulMessage color="blue">元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={OnclickBtn}>カウントアップ</button>
      <button onClick={OnclickSwitchBtn}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>!(^^)!</p>}
    </React.Fragment>
  );
};

export default App;
