import React from "react";
import { StyleSheet, View } from "react-native";
import Square from "./components/Square";

export default function App() {
  return (
    <View style={styles.container}>
      <Square name="Square 1" backgroundColor="#7fd0e6" />
      <Square name="Square 2" backgroundColor="#59b7b1" />
      <Square name="Square 3" backgroundColor="#f35b6a" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "white",
  },
});
