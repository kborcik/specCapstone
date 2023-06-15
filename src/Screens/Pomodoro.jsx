import React from "react";
import { useTimer } from "react-timer-hook";
import "./Pomodoro.css";

function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
    });

  return (
    <div className="Pomodoro">
      <div style={{ textAlign: "center" }} className="Timer">
        <p>An 45 minute focus timer for important tasks</p>
        <div style={{ fontSize: "100px" }}>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <p>{isRunning ? "Running" : "Not running"}</p>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 2700);
            restart(time);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default function Pomodoro() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 2700); // 45 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
