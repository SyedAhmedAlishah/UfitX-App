import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  textinput: {
    width: "90%",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#F7F8F8",
    elevation: 10,
    shadowColor: "#92A3FD",
  },

  texth1: {
    color: "#1D1617",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "500",
  },
  texth2: {
    color: "#1D1617",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "700",
    paddingBottom: 30,
  },
  btncon: {
    flex: 0.5,
    backgroundColor: "#FFFF",
    alignItems: "center",
    paddingBottom: 20,
  },
  footer: {
    flex: 0.5,
    backgroundColor: "#FFFF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textf1: {
    color: "#1D1617",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "500",
  },
  textf2: {
    color: "#C58BF2",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "500",
  },
  scrollView: {
    backgroundColor: "#DDDD",
   // height: "100%",
  },
});

export { styles };
