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
    { title: "Stopwatch", C: <Stopwatch size={400} strokeWidth={15} /> },
    { title: "Countdown", C: <Countdown size={400} strokeWidth={15} /> },
    { title: "XY", C: <XY size={400} strokeWidth={15} /> },
    { title: "Tabata", C: <Tabata size={400} strokeWidth={15} /> },
  ];

  return (
    <Timers>
      {timers.map((timer, index) => (
        <Timer key={index}>
          <TimerTitle>{timer.title}</TimerTitle>
          {timer.C}
        </Timer>
      ))}
    </Timers>
  );
}

export default App;
