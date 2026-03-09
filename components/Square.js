import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Square({ name, backgroundColor }) {
  return (
    <View style={[styles.square, { backgroundColor }]}>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    fontSize: "15px",
  },
});
