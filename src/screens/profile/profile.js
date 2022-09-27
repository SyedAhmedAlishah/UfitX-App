import React from "react";
import { View, Button, Alert, StyleSheet } from "react-native";
import {
  getUserSession,
  removeUserSession,
} from "../../services/sessionHelper";

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        title="Logout"
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#02FA",
  },
});
export { Profile };
