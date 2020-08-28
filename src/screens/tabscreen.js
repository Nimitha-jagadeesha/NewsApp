import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Title,
  Left,
  Body,
  Right,
} from "native-base";
import { View } from "react-native";
import Tab1 from "./tabs/tab1";
import Tab2 from "./tabs/tab2";
import Tab3 from "./tabs/tab3";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
export default class TabsExample extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <View style={{backgroundColor:'#009387'}}></View>;
    } else {
      return (
        <Container>
          <Header hasTabs>
            <Left />
            <Body>
              <Title>News App</Title>
            </Body>
            <Right />
          </Header>
          <Tabs>
            <Tab  heading="Tab1">
              <Tab1 />
            </Tab>
            <Tab heading="Tab2">
              <Tab2 />
            </Tab>
            <Tab heading="Tab3">
              <Tab3 />
            </Tab>
          </Tabs>
        </Container>
      );
    }
  }
}
