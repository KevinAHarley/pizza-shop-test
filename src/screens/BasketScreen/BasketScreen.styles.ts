import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 8,
    paddingTop: 32,
  },
  innerContainer: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
  },
  navigationText: {
    paddingTop: 16,
    color: "lightBlue",
  },

  foodItems: {
    flexDirection: "row",
  },
});

export default styles;
