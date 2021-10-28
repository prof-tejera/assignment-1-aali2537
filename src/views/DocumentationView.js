import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Loading from "../components/generic/Loading";
import Button from "../components/generic/Button";
import Circle from "../components/generic/Circle";
import DisplayRound from "../components/generic/DisplayRound";
import DisplayTimer from "../components/generic/DisplayTimer";
import Panel from "../components/generic/Panel";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="Loading spinner "
            component={<Loading />}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "medium",
              },
            ]}
          />
          <DocumentComponent
            title="Button "
            component={<Button type="Primary" />}
            propDocs={[
              {
                prop: "type",
                description:
                  "Changes button between the primary color scheme or secondary color depending on value",
                type: "string",
                defaultValue: "Primary",
              },
            ]}
          />
          <DocumentComponent
            title="Circle "
            component={
              <Circle
                size={100}
                percent={100}
                strokeWidth={10}
                timerVisible={false}
              />
            }
            propDocs={[
              {
                prop: "size",
                description:
                  "Determines the width and height of the svg element",
                type: "int",
                defaultValue: "200",
              },
              {
                prop: "strokeWidth",
                description: "Determines the thickness of the progress bar",
                type: "int",
                defaultValue: "15",
              },
              {
                prop: "percent",
                description:
                  "Determines how much of the progress bar should be filled",
                type: "int",
                defaultValue: "100",
              },
              {
                prop: "rest of the props",
                description:
                  "The rest of the props are either passed along to other props (explained in documentation of those props) for use or are made for plans of future functionality but currently are not used.",
                type: "N/A",
                defaultValue: "N/A",
              },
            ]}
          />
          <DocumentComponent
            title="DisplayTimer "
            component={
              <DisplayTimer minutes={6} seconds={23} milliseconds={67} />
            }
            propDocs={[
              {
                prop: "minutes",
                description:
                  "Current value of timer in minutes. Will display in the leftmost section",
                type: "string",
                defaultValue: "0",
              },
              {
                prop: "seconds",
                description:
                  "Current value of timer in seconds. Will display in the middle section",
                type: "string",
                defaultValue: "0",
              },
              {
                prop: "milliseconds",
                description:
                  "Current value of timer in seconds. Will display in the rightmost section",
                type: "string",
                defaultValue: "0",
              },
            ]}
          />
          <DocumentComponent
            title="DisplayRound "
            component={<DisplayRound round={5} currentMode="Rest" />}
            propDocs={[
              {
                prop: "round",
                description:
                  "Current value of round will display. Will also detect if current timer using component has no rounds and will not display text in such a case. (Component is an svg text element and is not displaying correctly here, please see timers for actual visual)",
                type: "int",
                defaultValue: "1",
              },
              {
                prop: "currentMode",
                description:
                  "Current mode will display, either Work or Rest mode if inside of a tabata timer. If not inside timer mode text will not display.",
                type: "string",
                defaultValue: "N/A",
              },
            ]}
          />
          <DocumentComponent
            title="panel "
            component={<Panel>Panel Content</Panel>}
            propDocs={[
              {
                prop: "type",
                description:
                  "Changes button between the primary color scheme or secondary color depending on value",
                type: "string",
                defaultValue: "Primary",
              },
            ]}
          />
        </div>
      </Container>
    );
  }
}

export default Documentation;
