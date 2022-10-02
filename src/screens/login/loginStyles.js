import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  maincon: {
    flex: 2,
    backgroundColor: "#FFFF",
  },
  toptxt: {
    fontSize: 15,
    alignSelf: "center",
    fontWeight: "600",
  },
  con1: {
    flex: 1.2,
    justifyContent: "flex-start",
    alignItems: "center",
    //backgroundColor: "#F242",
  },
  textBoxCon: {
    flex: 0.12,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#F7F8F8",
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 5,
  },
  inputicon: {
    backgroundColor: "transparent",
    paddingRight: 5,
    color: "#7B6F72",
  },
  inputtext: {
    width: "80%",
    padding: 5,
    color: "#ADA4A5",
    marginVertical: 5,
    borderRadius: 5,
    borderColor: "#F7F8F8",
    backgroundColor: "transparent",
    // elevation: 10,
    // shadowColor: "grey",
  },
  con2: {
    flex: 0.8,
    justifyContent: "flex-start",
    alignItems: "center",
    //backgroundColor: "#F22",
  },
  socialIcon: {
    borderColor: "#DDDADA",
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    marginHorizontal: 10,
  },
});

export { styles };
//
