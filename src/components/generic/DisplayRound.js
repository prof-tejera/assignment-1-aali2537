import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Round = styled.text`
  stroke: white;
  fill: white;
  text-anchor: middle;
  font-size: 1em;
`;

const RoundType = styled(Round)`
  font-size: 0.8em;
`;

class DisplayRound extends React.Component {
  render() {
    const { round, currentMode } = this.props;
    return (
      <>
        <Round x="50%" y="60%">
          Round {round}
        </Round>
        {currentMode && (
          <RoundType x="50%" y="70%">
            {currentMode}
          </RoundType>
        )}
      </>
    );
  }
}

DisplayRound.propTypes = {
  round: PropTypes.number,
  currentMode: PropTypes.string,
};

DisplayRound.defaultProps = {
  round: 1,
};

export default DisplayRound;
