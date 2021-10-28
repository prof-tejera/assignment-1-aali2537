import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { formatNumber } from "../../utils/helpers";

const Timer = styled.text`
  stroke: white;
  fill: white;
  text-anchor: middle;
  font-size: 2em;
`;

class DisplayTimer extends React.Component {
  render() {
    const { minutes, seconds, milliseconds } = this.props;
    return (
      <Timer x="50%" y="50%">
        {formatNumber(minutes)}:{formatNumber(seconds)}:
        {formatNumber(milliseconds)}
      </Timer>
    );
  }
}

DisplayTimer.propTypes = {
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  milliseconds: PropTypes.number,
};

export default DisplayTimer;
