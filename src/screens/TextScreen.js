import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export default function TextScreen() {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 4 && (
        <Text style={styles.message}>
          Pasword must be longer than 5 characters
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  message: {
    color: "red",
  },
});
