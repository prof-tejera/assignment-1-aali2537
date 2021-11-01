import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import DisplayTimer from "./DisplayTimer";
import DisplayRound from "./DisplayRound";
import { calcRadius, calcCircum, calcOffset } from "../../utils/helpers";

const EmptyProgressCircle = styled.circle`
  stroke: white;
  fill: transparent;
  cx: ${(props) => props.c}px;
  cy: ${(props) => props.c}px;
  stroke-dasharray: ${(props) => calcCircum(props.r)};
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

const ProgressCircle = styled(EmptyProgressCircle)`
  stroke: #a80874;
  stroke-dashoffset: ${(props) => calcOffset(props.r, props.percent)};
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

class Circle extends React.Component {
  render() {
    const {
      size,
      minutes,
      seconds,
      milliseconds,
      strokeWidth,
      percent,
      currentRound,
      roundLength,
      currentMode,
      timerVisible,
    } = this.props;

    return (
      <>
        <svg height={size} width={size}>
          <EmptyProgressCircle
            r={calcRadius(size, strokeWidth)}
            c={size / 2}
            strokeWidth={strokeWidth}
            shape-rendering="smooth"
          />
          <ProgressCircle
            r={calcRadius(size, strokeWidth)}
            c={size / 2}
            strokeWidth={strokeWidth + 1}
            percent={percent}
            shape-rendering="smooth"
          />
          {timerVisible && (
            <DisplayTimer
              minutes={minutes}
              seconds={seconds}
              milliseconds={milliseconds}
            />
          )}
          {roundLength && (
            <DisplayRound round={currentRound} currentMode={currentMode} />
          )}
        </svg>
      </>
    );
  }
}

Circle.propType = {
  size: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  milliseconds: PropTypes.number,
  strokeWidth: PropTypes.number,
  percent: PropTypes.number,
  currentRound: PropTypes.number,
  roundLength: PropTypes.number,
  currentMode: PropTypes.oneOf(["Rest", "Work"]),
};

Circle.defaultProps = {
  size: 200,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
  strokeWidth: 15,
  percent: 100,
  timerVisible: true,
};

export default Circle;
