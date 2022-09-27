import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";


function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(0,0,0,0.6)",
    zIndex: 30,
    position: "absolute",
  },
});

export { Loading };
