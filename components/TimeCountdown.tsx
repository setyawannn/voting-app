import React from "react";
import Countdown from "react-countdown";

export default function TimeCountdown() {
  const countDown = ({}) => {
    return;
  };

  return (
    <div className="text-center">
      <p>Voting akan dimulai pada: </p>
      <Countdown date={Date.now() + 10000} />
    </div>
  );
}
