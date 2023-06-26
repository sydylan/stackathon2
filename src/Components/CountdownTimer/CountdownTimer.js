import { useState, useEffect } from "react";
import "./CountdownTimer.css";
import { getRemainingTimeUntilMsTimestamp } from "./Utils/CountdownTimerUtils";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
};

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTimestampMs = new Date().getTime();
      updateRemainingTime(countdownTimestampMs, currentTimestampMs);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown, currentTimestamp) {
    setRemainingTime(
      getRemainingTimeUntilMsTimestamp(countdown, currentTimestamp)
    );
  }

  return (
    <div>
      <div className="title">A 24 Hour Countdown.</div>
      <div className="countdown-timer">
        <span className="two-numbers">{remainingTime.hours}</span>
        <span>hours</span>
        <span className="two-numbers">{remainingTime.minutes}</span>
        <span>minutes</span>
        <span className="two-numbers">{remainingTime.seconds}</span>
        <span>seconds</span>
      </div>
      <div className="subTitle">
        Use when something rad is happening in 24 hours.
      </div>
    </div>
  );
};

export default CountdownTimer;
