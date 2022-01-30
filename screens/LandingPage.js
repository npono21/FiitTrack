import React from "react";

import { View, Text, Button } from "react-native";

import LottieView from "lottie-react-native";

const LandingPage = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ marginTop: 100, marginLeft: 30 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 55,
            fontFamily: "System",
            color: "white",
          }}
        >
          Welcome
        </Text>
        <Text style={{ fontFamily: "System", fontSize: 20, color: "white" }}>
          {"  "}
          to your interactive fitness
        </Text>
        <Text style={{ fontFamily: "System", fontSize: 20, color: "white" }}>
          {"  "}
          logging experience
        </Text>
        <View style={{ marginTop: 35 }}>
          <LottieView
            source={require("../assets/10212-immune-herbamojo.json")}
            autoPlay
            loop
            style={{ height: 200, alignSelf: "center" }}
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              marginTop: 75,
              width: 250,
              height: 45,
              borderRadius: 20,
              justifyContent: "center",
            }}
          >
            <Button
              title="Login"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
          <View
            style={{
              backgroundColor: "white",
              marginTop: 15,
              width: 250,
              height: 45,
              borderRadius: 20,
              justifyContent: "center",
            }}
          >
            <Button
              title="Signup"
              onPress={() => navigation.navigate("Signup")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LandingPage;
