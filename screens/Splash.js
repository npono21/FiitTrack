import React from "react";

import { View, Text } from "react-native";

import LottieView from "lottie-react-native";

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("LandingPage");
  }, 5000);
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View
        style={{ alignItems: "center", marginTop: "auto", marginBottom: 200 }}
      >
        <Text
          style={{
            fontFamily: "System",
            fontSize: 60,
            color: "white",
            fontWeight: "bold",
          }}
        >
          FiitTrack
        </Text>
        <View style={{ marginBottom: 5 }}>
          <Text style={{ fontFamily: "System", fontSize: 15, color: "white" }}>
            Powered by React Native
          </Text>
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
