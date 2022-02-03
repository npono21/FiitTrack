import React from "react";

import { View, Text, StyleSheet } from "react-native";

import LottieView from "lottie-react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  contentContainer: {
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 200,
  },
  titleText: {
    fontFamily: "System",
    fontSize: 60,
    color: "white",
    fontWeight: "bold",
  },
  contentText: {
    fontFamily: "System",
    fontSize: 15,
    color: "white",
  },
});

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("LandingPage");
  }, 5000);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>FiitTrack</Text>
        <View style={{ marginBottom: 5 }}>
          <Text style={styles.contentText}>Powered by React Native</Text>
        </View>
        <LottieView
          source={require("../assets/94295-loading-animation.json")}
          autoPlay
          loop
          style={{ height: 30, alignSelf: "center" }}
        />
      </View>
    </View>
  );
};
export default Splash;
