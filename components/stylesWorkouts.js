import { StyleSheet } from "react-native";

// colors
export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darkLight: "#9CA3AF",
  brand: "#6D28D9",
  green: "#10B981",
  red: red,
};

const { red } = Colors;

const modalDialog = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "85%",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "500",
  },
  titleView: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  workoutNameInput: {
    fontSize: 15,
    height: 40,
    marginTop: 15,
    paddingLeft: 10,
    width: "85%",
    marginLeft: 22,
    borderWidth: 1.5,
    borderColor: "rgba(255, 0, 0, 0.5)",
    borderRadius: 10,
  },
  typeStyle: {
    fontSize: 15,
    marginRight: 10,
  },
  typeViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  selectStyle: {},
  dropDownPicker: {},
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
    padding: 5,
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "space-evenly",
    borderTopWidth: 0.2,
  },
  cancelButtonStyle: {},
  submitButtonStyle: {},
});

const styles = StyleSheet.create({
  workoutNameInput: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 25,
    height: 40,
    fontWeight: "bold",
    marginLeft: 10,
  },
  deleteAddIcon: {
    top: 15,
    right: 25,
    position: "absolute",
    zIndex: 1,
  },
  measurementsButton: {
    zIndex: 1,
  },
});

const styledRectangle = StyleSheet.create({
  workoutInfoContainer: {
    width: 360,
    marginTop: 10,
    marginLeft: 0,
    borderRadius: 28,
    padding: 10,
    backgroundColor: "rgba(81, 81, 81, 0.35)",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "red",
  },
});

const appFontStyles = StyleSheet.create({
  titleText: {
    fontFamily: "System",
    fontSize: 30,
    marginTop: 45,
    color: "white",
  },
  workoutInfoStyle: {
    flexDirection: "column",
    marginTop: 10,
    marginLeft: 10,
  },
  workoutInfoText: {
    color: "red",
    fontSize: 15,
    fontFamily: "System",
  },
});

export { modalDialog, styles, styledRectangle, appFontStyles };
