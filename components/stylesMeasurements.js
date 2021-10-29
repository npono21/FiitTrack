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
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "red",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    fontFamily: "System",
    fontSize: 20,
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
    padding: 2.5,
    paddingLeft: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
  },
  saveClearButton: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    height: 40,
    width: 100,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 5,
    borderColor: "red",
    borderWidth: 2,
    flexDirection: "row",
  },
});

export { stylesMeasurements };
