import React, { useState, useReducer, useEffect } from "react";

import { StyleSheet, View, ImageBackground, ScrollView } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { StyledContainer, HomeButton } from "../components/styles";

const styles = StyleSheet.create({
  menuBarStyles: {
    backgroundColor: "black",
    height: 75,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  menuIconStyles: {
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
});

const Measurements = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={10}
      resizeMode="cover"
      source={require("../assets/firstScreen.jpg")}
      style={styles.image}
    >
      <ScrollView>
        <StyledContainer></StyledContainer>
      </ScrollView>
      <View style={styles.menuBarStyles}>
        <View style={styles.menuIconStyles}>
          <HomeButton onPress={() => navigation.navigate("Workouts")}>
            <AntDesign name="home" size={45} color="red" />
          </HomeButton>
          <AntDesign name="barschart" size={45} color="red" />
        </View>
      </View>
    </ImageBackground>
  );
};
export default Measurements;
