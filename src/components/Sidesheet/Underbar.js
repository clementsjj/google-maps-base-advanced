import React, { Component } from "react";
import Vid from "./Vid";
import {
  Button,
  SideSheet,
  Paragraph,
  Pane,
  Heading,
  Tablist,
  Tab,
  Card
} from "evergreen-ui";

const style = {
  // height: '8vh'
  backgroundColor: "#1f8714"
};

const tabs = ["Something", "Something Else"];
class Underbar extends Component {
  state = {
    isShown: false,
    selectedIndex: 0
  };
  render() {
    return (
      <React.Fragment>
        <SideSheet
          isShown={this.state.isShown}
          onCloseComplete={() => this.setState({ isShown: false })}
          containerProps={{
            display: "flex",
            flex: "1",
            flexDirection: "column"
          }}>
          <Pane zIndex={1} flexShrink={0} elevation={0}>
            <Pane padding={16} borderBottom="muted" backgroundColor="#f3f6f2">
              <Heading size={600}>Title of Something</Heading>
              <Paragraph size={400} color="muted">
                Some text or Something.
              </Paragraph>
            </Pane>

            <Pane display="flex" padding={8} backgroundColor="#e5eae5">
              <Tablist>
                {tabs.map((tab, index) => (
                  <Tab
                    key={tab}
                    isSelected={this.state.selectedIndex === index}
                    onSelect={() => this.setState({ selectedIndex: index })}>
                    {tab}
                  </Tab>
                ))}
              </Tablist>
            </Pane>
          </Pane>

          <Pane flex="1" padding={16}>
            <Vid vidName="7q1bbRzNQmI" />
            <Card
              backgroundColor="#f3f6f2"
              elevation={0}
              height={240}
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Paragraph>Hello.</Paragraph>
            </Card>
          </Pane>
        </SideSheet>
        <Button style={style} onClick={() => this.setState({ isShown: true })}>
          Click This.
        </Button>
      </React.Fragment>
    );
  }
}

export default Underbar;
