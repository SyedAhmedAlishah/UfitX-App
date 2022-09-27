import AsyncStorage from "@react-native-async-storage/async-storage";

const saveUserSession = async (value) => {
  try {
    await AsyncStorage.setItem("isLoggedIn", value);
    console.log({ value });
  } catch (error) {}
};

export { saveUserSession };

const getUserSession = async () => {
  try {
    const response = await AsyncStorage.getItem("isLoggedIn");
    if (response !== null) {
      return response;
    }
    return "false";
  } catch (error) {
    // error reading value
  }
};

export { getUserSession };

/***
 * This will remove the token for persistent log in
 */

async function removeUserSession(navigation) {
  try {
    await AsyncStorage.setItem("isLoggedIn", "");
    navigation.replace("Login");
  } catch (error) {}
}

export { removeUserSession };
