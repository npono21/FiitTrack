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

const commonAppStyles = StyleSheet.create({
  loginRegsiterPageTitle: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 1)",
    marginTop: 45,
    fontFamily: "System",
  },
  appPageTitle: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 1)",
    marginTop: 45,
    fontFamily: "System",
  },
  subtitleStyle: {
    color: "red",
    fontSize: 20,
    fontFamily: "System",
  },
  regularTextStyle: {
    color: "white",
    fontSize: 15,
    fontFamily: "System",
  },
  styledContainer: {
    flex: 1,
    height: "100%",
  },
  homeButton: {
    zIndex: 1,
  },
  menuBarStyle: {
    backgroundColor: "black",
    height: 75,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  menuIconStyle: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-evenly",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  measurementsButton: {
    zIndex: 1,
  },
  workoutsSubtitleContainer: {
    marginTop: 15,
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 10,
    backgroundColor: "rgba(81, 81, 81, 0.5)",
    width: 130,
  },
  measurementsSubtitleContainer: {
    marginTop: 15,
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 10,
    backgroundColor: "rgba(81, 81, 81, 0.5)",
    width: 175,
  },
});

export { commonAppStyles };
