import React, { Component } from "react";
import {
  Container,
  Content,
  List,
  Text,
  
} from "native-base";

import getArticles from "../../service/News";
import { Alert,ActivityIndicator } from "react-native";
import DataItem from "../../component/DataItem";

export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
    };
  }
  componentDidMount() {
    getArticles().then((data) => {
      this.setState({
        isLoading: false,
        data: data,
      });
    }),
      (error) => {
        Alert.alert("Error", error);
      };
  }

  render() {
    const view = this.state.loading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
        <Text style={{marginTop: 10}} children="Please Wait.." />
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
          return <DataItem data={item} />;
        }}
      />
    );
    return (
      <Container>
        <Content>{view}</Content>
      </Container>
    );
  }
}
