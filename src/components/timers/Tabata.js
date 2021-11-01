import React from "react";
import PropTypes from "prop-types";

import Panel from "../generic/Panel";
import Circle from "../generic/Circle";
import Button from "../generic/Button";

class Tabata extends React.Component {
  constructor() {
    super();
    this.state = {
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      totalRounds: 10,
      currentRound: 1,
      roundLength: 60,
      restLength: 10,
      workLength: 50,
      currentMode: "Work",
    };
  }
  render() {
    return (
      <Panel>
        <Circle percent={66} {...this.props} {...this.state} />
        <div>
          <Button type="Primary" />
          <Button type="Secondary" />
        </div>
      </Panel>
    );
  }
}

Tabata.propTypes = {
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};

export default Tabata;
