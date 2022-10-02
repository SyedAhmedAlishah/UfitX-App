import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../services/firebaseHelper";

function AddBook({ show, closeHandler }) {
  const [bookname, setBookName] = useState("");
  const [authname, setAuthName] = useState("");
  const [bookdate, setBookDate] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // First we Make blob of fetched data from url
  // Then we need to have name of the child

  const uploadRemote = async () => {
    const loadImage = await fetch(image);
    const imageBlob = await loadImage.blob();
    firebase
      .storage()
      .ref("Books/")
      .child(`IMG_${Math.random(1000000)}`)
      .put(imageBlob)
      .then((response) => {
        //
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal
      animationIn={"bounceInUp"}
      animationInTiming={1000}
      animationOut={"bounceOutDown"}
      animationOutTiming={1000}
      onRequestClose={closeHandler}
      isVisible={show}
    >
      <View style={styles.maincon}>
        <View style={styles.subcon}>
          <Text style={styles.header}>Add Your Book</Text>
          <TextInput
            placeholder="Book Name"
            style={styles.textinput}
            onChangeText={setBookName}
          />
          <TextInput
            placeholder="Author's Name"
            style={styles.textinput}
            onChangeText={setAuthName}
          />
          <TextInput
            placeholder="Book Date"
            style={styles.textinput}
            onChangeText={setBookDate}
          />
          <TouchableOpacity style={styles.upbtn} onPress={pickImage}>
            <Text style={styles.btnText}>Upload Cover </Text>
            <MaterialIcons name="upload-file" size={24} color="black" />
          </TouchableOpacity>

          {image && (
            <Image
              source={{ uri: image }}
              //
              style={styles.imagecon}
            />
          )}
        </View>
        <TouchableOpacity style={styles.submitbtn} onPress={uploadRemote}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export { AddBook };

const styles = StyleSheet.create({
  maincon: {
    height: "80%",
    backgroundColor: "white",
    borderRadius: 20,
  },
  subcon: {
    height: "90%",
    padiing: 5,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  textinput: {
    width: "80%",
    alignSelf: "center",
    padding: 5,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: "brown",
    borderWidth: 2,
  },
  upbtn: {
    flexDirection: "row",
    justifyContent: "center",
    width: "70%",
    backgroundColor: "#AAD",
    alignSelf: "center",
    borderRadius: 30,
    padding: 10,
  },
  imagecon: {
    width: 300,
    height: 230,
    alignSelf: "center",
    margin: 10,
    resizeMode: "center",
  },
  submitbtn: {
    width: "40%",
    backgroundColor: "#AAD",
    alignSelf: "center",
    borderRadius: 30,
    padding: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "600",
    alignSelf: "center",
  },
});
