import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FloatingAction } from "react-native-floating-action";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AddBook } from "../../components/addBook";
import { styles } from "./homestyles";
import firebase from "firebase";

function Home() {
  const [show, setShow] = useState(false);
  //const [imageURL, setImageURL] = useState(undefined);
  const [imagelist, setImageList] = useState([]);

  function close() {
    setShow(!show);
  }

  const imgfetch = async () => {
    await firebase
      .storage()
      .ref("Books/" + "3")
      .getDownloadURL()
      .then((response) => {
        //console.log("I am first");
        setImageURL(response);
        // console.log(imageURL);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const allImg = async () => {
    setImageList([]);
    await firebase
      .storage()
      .ref("Books")
      .listAll()
      .then((response) => {
        response.items.forEach(async (img) => {
          await img
            .getDownloadURL()
            .then((url) => {
              setImageList((oldList) => [...oldList, url]);
            })
            .catch((error) => {
              console.log(error.message);
            });
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const listURL = (response) => {};

  const delImg = async () => {
    await firebase
      .storage()
      .ref("Books/2")
      .delete()
      .then(() => {
        console.log("image deleted");
        setImageURL(undefined);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, alignSelf: "center" }}>
          React Native is fun
        </Text>
        <TouchableOpacity style={styles.fetchimg} onPress={allImg}>
          <Text
            style={{ fontSize: 15, fontWeight: "600", alignSelf: "center" }}
          >
            Fetch Images
          </Text>
        </TouchableOpacity>
        {/* {imagelist && (
          <Image style={styles.imgCon} source={{ uri: imagelist[1] }} />
        )} */}
        <FlatList
          data={imagelist}
          renderItem={({ item }) => (
            <>
              <View style={{flex:1, backgroundColor:"#BB2", }}>
                <Image style={styles.imgCon} source={{ uri: item }} />
              </View>
            </>
          )}
        />

        <TouchableOpacity style={styles.fetchimg} onPress={delImg}>
          <Text
            style={{ fontSize: 15, fontWeight: "600", alignSelf: "center" }}
          >
            Delete Image
          </Text>
        </TouchableOpacity>

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
