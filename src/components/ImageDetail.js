import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ImageDetail({ title, imageSource, score }) {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
