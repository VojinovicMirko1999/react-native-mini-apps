import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function BoxScreen() {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle} />
      <View style={styles.textTwoStyle} />
      <View style={styles.textThreeStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textOneStyle: {
    backgroundColor: "red",
    height: 100,
    width: 100,
  },
  textTwoStyle: {
    backgroundColor: "green",
    height: 100,
    width: 100,
    marginTop: 100,
  },
  textThreeStyle: {
    backgroundColor: "blue",
    height: 100,
    width: 100,
  },
});
