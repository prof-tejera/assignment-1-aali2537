import React from "react";
import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

const Timers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: auto;
  padding-left: 20%;
  padding-right: 20%;
`;

const Timer = styled.div`
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
  flex-basis: 30%;
  text-align: center;
`;

const TimerTitle = styled.div``;

function App() {
  const timers = [
    { title: "Stopwatch", C: <Stopwatch /> },
    { title: "Countdown", C: <Countdown /> },
    { title: "XY", C: <XY /> },
    { title: "Tabata", C: <Tabata /> },
  ];

  return (
    <Timers>
      {timers.map((timer) => (
        <Timer>
          <TimerTitle>{timer.title}</TimerTitle>
          {timer.C}
        </Timer>
      ))}
    </Timers>
  );
}

export default App;
