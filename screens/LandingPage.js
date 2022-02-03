import React from "react";

import { View, Text, Button, StyleSheet } from "react-native";

import LottieView from "lottie-react-native";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "black",
    flex: 1,
  },
  contentContainer: {
    marginTop: 100,
    marginLeft: 30,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 55,
    fontFamily: "System",
    color: "white",
  },
  contentText: {
    fontFamily: "System",
    fontSize: 20,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "column",
    alignSelf: "center",
  },
  signInButtonContainer: {
    backgroundColor: "white",
    marginTop: 75,
    width: 250,
    height: 45,
    borderRadius: 20,
    justifyContent: "center",
  },
  singUpButtonContainer: {
    backgroundColor: "white",
    marginTop: 15,
    width: 250,
    height: 45,
    borderRadius: 20,
    justifyContent: "center",
  },
});

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Welcome</Text>
        <Text style={styles.contentText}>
          {"  "}
          to your interactive fitness
        </Text>
        <Text style={styles.contentText}>
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
        <View style={styles.buttonContainer}>
          <View style={styles.signInButtonContainer}>
            <Button
              title="Sign in"
              onPress={() => navigation.navigate("Login")}
            />
          </View>
          <View style={styles.singUpButtonContainer}>
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
