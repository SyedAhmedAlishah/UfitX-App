import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function LoginButton({ title, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={disabled === true ? styles.btn2 : styles.btn1}
      disabled={disabled}
      onPress={onPress}
    >
      <Ionicons name="md-log-in" size={35} color="white" />
      <Text style={styles.btnText}> {title} </Text>
    </TouchableOpacity>
  );
}

const btn = {
  flexDirection: "row",
  alignItems: "baseline",
  justifyContent: "center",
  width: "90%",
  padding: 15,
  borderRadius: 40,
  alignItems: "center",
  marginTop: 30,
  elevation: 10,
};

const styles = StyleSheet.create({
  btnText: {
    fontSize: 24,
    fontWeight: "bold",
    alignItems: "center",
    color: "#FFFF",
  },
  btn1: {
    ...btn,
    shadowColor: "#9DCEFF",
    backgroundColor: "#92A3FD",
  },
  btn2: {
    ...btn,
    backgroundColor: "grey",
    shadowColor: "blue",
  },
  btnicon: {
    borderRadius: 100,
  },
});

export { LoginButton };
