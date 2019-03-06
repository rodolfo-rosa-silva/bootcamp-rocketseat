import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";

import "./config/ReactotronConfig";
import "./config/DevToolsConfig";

import Todo from "~/components/Todo";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Todo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  }
});
