import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FloatingAction } from "react-native-floating-action";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AddBook } from "../../components/addBook";
import { styles } from "./homestyles";
import firebase from "firebase";

function Home() {
  const [show, setShow] = useState(false);
  const [imageURL, setImageURL] = useState(undefined);

  function close() {
    setShow(!show);
  }

  const imgfetch = async () => {
    await firebase
      .storage()
      .ref("Books/" + "1")
      .getDownloadURL()
      .then((response) => {
        setImageURL(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, alignSelf: "center" }}>
          Home Screen is fun
        </Text>
        <TouchableOpacity style={styles.fetchimg} onPress={imgfetch}>
          <Text
            style={{ fontSize: 15, fontWeight: "600", alignSelf: "center" }}
          >
            Fetch Images
          </Text>
        </TouchableOpacity>
        <Image style={styles.imgCon} source={{ uri: imageURL }} />
        <FloatingAction
          showBackground={false}
          color="blue"
          onPressMain={() => setShow(!show)}
          floatingIcon={
            <MaterialCommunityIcons name="book-plus" size={24} color="#FFFF" />
          }
        />
      </View>
      <AddBook show={show} closeHandler={close} />
    </SafeAreaView>
  );
}

export { Home };
