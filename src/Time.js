import React from "react";
import ReactDOM from "react-dom";

const secondsToTime = totalSeconds => {
  const seconds = totalSeconds % 60;
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const hours = Math.floor(totalSeconds / 3600);

  return {
    seconds,
    minutes,
    hours
  };
};

const formatTime = totalSeconds => {
  const timeObject = secondsToTime(totalSeconds);

  return (
    String(timeObject.hours).padStart(2, "0") +
    ":" +
    String(timeObject.minutes).padStart(2, "0") +
    ":" +
    String(timeObject.seconds).padStart(2, "0")
  );
};

const Time = ({ totalSeconds }) => {
  return (
    <div className="container">
      <div className="timer">
        <span> {formatTime(totalSeconds)}</span>
      </div>
      <div className="spans">
        <div className="spanname">Hour</div>
        <div className="spanname">Minute</div>
        <div className="spanname">Second</div>
      </div>
    </div>
  );
};

export default Time;
