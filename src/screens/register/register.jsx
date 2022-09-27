import { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "./resgisterStyles";
//import { Loading } from "../../components/loading";
import { Button } from "../../components/button";
import { CheckBox } from "../../components/checkBox";
import { attemptToRegisterNewUsers } from "../../services/firebaseAuthHelper";
import { SafeAreaView } from "react-native-safe-area-context";

function Register({ navigation }) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  //const [isLoading, setIsLoading] = useState(false);

  const checkBoxHandler = () => {
    setCheckBox(!checkbox);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.texth1}>Hey There,</Text>
            <Text style={styles.texth2}>Create an Account</Text>
            <View></View>
            <TextInput
              style={styles.textinput}
              placeholder="First Name"
              placeholderTextColor="#ADA4A5"
              onChangeText={setFirstName}
              inlineImageLeft="username"
              inlineImagePadding={2}
            />
            <TextInput
              style={styles.textinput}
              placeholder="Last Name"
              placeholderTextColor="#ADA4A5"
              onChangeText={setLastName}
            />
            <TextInput
              style={styles.textinput}
              placeholder="Email"
              placeholderTextColor="#ADA4A5"
              onChangeText={setEmail}
            />

            <TextInput
              style={styles.textinput}
              placeholder="Password"
              placeholderTextColor="#ADA4A5"
              secureTextEntry={true}
              onChangeText={setPassword}
            />
            <CheckBox
              selected={checkbox}
              onPress={checkBoxHandler}
              text="By continuing you accept our Privacy Policy and Term of Use"
            />
          </View>
          <View style={styles.btncon}>
            <Button
              title={"Register"}
              disabled={
                email == "" ||
                password == "" ||
                firstname == "" ||
                lastname == "" ||
                checkbox == false
                  ? true
                  : false
              }
              onPress={() => {
                attemptToRegisterNewUsers(
                  email,
                  password,
                  firstname,
                  lastname,
                  navigation
                );
              }}
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.textf1}> Already have an account? </Text>
            <Text
              style={styles.textf2}
              onPress={() => {
                navigation.replace("Login");
              }}
            >
              Login
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export { Register };

{
  /* {isLoading === true && <Loading />} */
}
