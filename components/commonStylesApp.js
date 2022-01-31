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
    textAlign: "center",
  },
  regularTextStyle: {
    color: "white",
    fontSize: 15,
    fontFamily: "System",
  },
  styledContainer: {
    flex: 1,
    height: "100%",
    paddingTop: 50,
  },
  pageTitleContainer: {
    flexDirection: "row",
    //marginTop: 60,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  homeButton: {
    zIndex: 1,
  },
  menuBarStyle: {
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 25,
    alignSelf: "center",
    width: 175,
  },
  menuIconStyle: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-evenly",
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0)",
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
    marginTop: 25,
    marginLeft: 15,
    borderRadius: 12.5,
    width: 175,
    height: 225,
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
});

export { commonAppStyles };
