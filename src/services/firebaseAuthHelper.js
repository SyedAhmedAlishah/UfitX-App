import { firebase } from "./firebaseHelper";
import { Alert } from "react-native";
import { saveUserSession } from "./sessionHelper";

function attemptToRegisterNewUsers(
  email,
  password,
  firstName,
  lastName,
  navigation
) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const userid = response.user.uid;
      addUserDetailsBasedOnUserUID(
        userid,
        email,
        firstName,
        lastName,
        navigation
      );
    })
    .catch((error) => {
      Alert.alert(error.message);
    });
}

function addUserDetailsBasedOnUserUID(
  userid,
  email,
  firstName,
  lastName,
  navigation
) {
  firebase
    .firestore()
    .collection("users")
    .doc(userid)
    .set({ firstName, lastName, email })
    .then(() => {
      navigation.replace("Login");
    })
    .catch((error) => {
      alert(error.message);
    });
}

export { attemptToRegisterNewUsers };

function attemptToSignIn(email, password, navigation) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      saveUserSession("true");
      navigation.replace("HomeScreen");
    })
    .catch((error) => {
      alert(error.message);
    });
}

export { attemptToSignIn };
