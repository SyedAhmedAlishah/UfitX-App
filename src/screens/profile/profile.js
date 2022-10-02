import React from "react";
import {
  View,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  getUserSession,
  removeUserSession,
} from "../../services/sessionHelper";

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          Alert.alert("Log Out", "Are you sure you want to log out?", [
            { text: "Cancel", style: "cancel", onPress: () => {} },
            {
              text: "Yes, Logout",
              onPress: () => {
                removeUserSession(navigation);
              },
            },
          ]);
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",

    backgroundColor: "#02FA",
  },
});
export { Profile };
