import { attemptToSignIn } from "../../services/firebaseAuthHelper";
import { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { LoginButton } from "../../components/loginButton";
import { styles } from "./loginStyles";
import { getUserSession } from "../../services/sessionHelper";
//import { LogBox } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  Feather,
} from "@expo/vector-icons";

import google from "../../../assets/google.png";
import facebook from "../../../assets/facebook.png";
function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ispressed, setIsPressed] = useState(false);

  // LogBox.ignoreLogs([
  //   "Warning: AsyncStorage has been extracted from react-native core and will be removed in a future release",
  // ]);

  async function loginCheck() {
    if ((await getUserSession()) == "true") {
      navigation.replace("HomeScreen");
    }
  }
  useEffect(() => {
    loginCheck();
  }, []);

  return (
    <SafeAreaView style={styles.maincon}>
      <KeyboardAvoidingView>
        <ScrollView>
          <View style={styles.maincon}>
            {/*  Header Text*/}
            <Text style={[styles.toptxt, { marginTop: 20 }]}>Hey there,</Text>
            <Text
              style={[
                styles.toptxt,
                { fontWeight: "900", fontSize: 25, marginBottom: 20 },
              ]}
            >
              Welcome Back
            </Text>
            <View style={styles.con1}>
              <View style={styles.textBoxCon}>
                <MaterialCommunityIcons
                  style={styles.inputicon}
                  name="email-box"
                  size={24}
                  color="black"
                />
                <TextInput
                  style={[styles.inputtext, { shadowColor: "red" }]}
                  placeholder="Email"
                  fontSize={16}
                  placeholderTextColor="#ADA4A5"
                  onChangeText={setEmail}
                />
              </View>
              <View style={styles.textBoxCon}>
                <SimpleLineIcons
                  style={styles.inputicon}
                  name="lock"
                  size={22}
                  color="black"
                />
                <TextInput
                  style={[styles.inputtext, { shadowColor: "red" }]}
                  placeholder="Password"
                  secureTextEntry={!ispressed}
                  fontSize={16}
                  placeholderTextColor="#ADA4A5"
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  style={{ position: "absolute", right: 15 }}
                  onPress={() => {
                    setIsPressed(!ispressed);
                  }}
                >
                  <Feather
                    name={ispressed ? "eye" : "eye-off"}
                    size={24}
                    color="#ADA4A5"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.con2}>
              <LoginButton
                title={"Login"}
                disabled={email == "" || password == "" ? true : false}
                onPress={() => {
                  attemptToSignIn(email, password, navigation);
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 40,
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <TouchableOpacity style={styles.socialIcon}>
                  <Image
                    source={google}
                    style={{ height: 60, width: 40, marginHorizontal: 10 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialIcon}>
                  <Image
                    source={facebook}
                    style={{ height: 40, width: 40, marginHorizontal: 10 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginTop: 10, fontSize: 18 }}>
                  Don't have an account yet?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.replace("Register")}
                >
                  <Text
                    style={{
                      marginTop: 10,
                      paddingLeft: 10,
                      fontSize: 18,
                      color: "#C58BF2",
                    }}
                  >
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
export { Login };
