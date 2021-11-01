import React from "react";
import PropTypes from "prop-types";

import Panel from "../generic/Panel";
import Circle from "../generic/Circle";
import Button from "../generic/Button";

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    };
  }
  render() {
    return (
      <Panel>
        <Circle percent={35} {...this.props} {...this.state} />
        <div>
          <Button type="Primary" />
          <Button type="Secondary" />
        </div>
      </Panel>
    );
  }
}

Countdown.propTypes = {
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};

export default Countdown;
