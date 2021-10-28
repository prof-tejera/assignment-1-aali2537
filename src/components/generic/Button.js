import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PrimaryButton = styled.button`
  background-color: #15cb61;
  color: white;
  margin-top: 4em;
  margin-right: 1em;
  margin-left 1em;
  border-width: 0;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  font-family: Segoe UI;
  font-size: 20px;
  padding: 1em 2em;
  transition: background-color .4s;

  :hover {
    background-color: #11a64f;
    cursor: pointer;
  }

  :active {
    background-color: #0e813e;
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background-color: #ea3546;

  :hover {
    background-color: #de172b;
  }

  :active {
    background-color: #b91324;
  }
`;

class Button extends React.Component {
  render() {
    const { type } = this.props;

    return (
      <>
        {type === "Primary" && <PrimaryButton>Start</PrimaryButton>}
        {type === "Secondary" && <SecondaryButton>Pause</SecondaryButton>}
      </>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(["Primary", "Secondary"]),
};

Button.defaultProps = {
  type: "Primary",
};

export default Button;
