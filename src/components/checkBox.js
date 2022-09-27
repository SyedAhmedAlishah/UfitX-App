import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function CheckBox({
  selected,
  onPress,
  style,
  textStyle,
  size = 30,
  color = "#211f30",
  text = "",
}) {
  return (
    <TouchableOpacity
      style={[styles.checkBox, style]}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <Icon
        size={size}
        color={color}
        name={selected ? "check-box" : "check-box-outline-blank"}
      />
      <Text style={styles.textStyle}> {text} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkBox: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: {
    //flex:1,
    marginLeft: 10,
    width: "75%",
    color: "#ADA4A5",
  },
});

export { CheckBox };
