import { StyleSheet } from "react-native";

const stylesMeasurements = StyleSheet.create({
  pastMeasurementsDropDownPicker: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    justifyContent: "center",
  },
  weightInputContainer: {
    width: 305,
    height: 50,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "rgba(81, 81, 81, 0.35)",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "red",
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textStyle: {
    fontFamily: "System",
    fontSize: 17,
    color: "white",
  },
  measurementLRBoxContainer: {
    flexDirection: "column",
  },
  measurmentBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  measurementContainer: {
    width: 135,
    height: 80,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "rgba(81, 81, 81, 0.35)",
    borderWidth: 2,
    borderColor: "red",
    padding: 5,
    backgroundColor: "black",
  },
  measurementInputStyle: {
    width: 75,
    textAlign: "center",
    height: 25,
    color: "red",
    fontWeight: "bold",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 5,
  },
  saveClearButton: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    height: 40,
    width: 100,
    alignSelf: "center",
  },
});

export { stylesMeasurements };
