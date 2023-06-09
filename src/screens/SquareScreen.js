import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";
import { useState } from "react";

const COLOR_INCREMENT = 15;

export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
      />
      <View
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          height: 150,
          width: 150,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({});
