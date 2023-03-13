import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "20" },
    { name: "Friend #2", age: "15" },
    { name: "Friend #3", age: "22" },
    { name: "Friend #4", age: "21" },
    { name: "Friend #5", age: "30" },
  ];

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={friends}
      renderItem={(
        /* element - element is {item: {name: 'Friend #number'}, index: some_number} */ {
          item,
        }
      ) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
      keyExtractor={(friend) => friend.name}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});

export default ListScreen;
