import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderColor: "white",
    borderWidth: 1,
    width: "100%",
    borderRadius: 16,
    marginVertical: 8,
    paddingLeft: 16,
    paddingBottom: 16,
  },
  text: {
    color: "white",
    paddingTop: 16,
  },
  innerContainer: {
    flexDirection: "row",
    width: "100%",
  },
  icon: {
    marginRight: 16,
    marginLeft: "auto",
  },
  quantityButtons: {
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  removeButton: {
    paddingHorizontal: 16,
  },
});

export default styles;
