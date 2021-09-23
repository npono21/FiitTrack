import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faWeight } from "@fortawesome/free-solid-svg-icons";

import {
  StyledContainer,
  PageTitle,
  Colors,
  DeleteIcon,
} from "../components/styles";

const { brand, darkLight, primary } = Colors;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    //blurRadius: {1}
  },
});

const styledSmallRectangle = StyleSheet.create({
  rectangle: {
    position: "absolute",
    marginTop: 100,
    marginLeft: 7,
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 10,
    backgroundColor: "rgba(81, 81, 81, 0.5)",
  },
});

const styledBigRectangle = StyleSheet.create({
  bigRectangle: {
    position: "absolute",
    height: 140,
    width: 360,
    marginTop: 160,
    marginLeft: 0,
    borderRadius: 28,
    paddingLeft: 25,
    paddingTop: 15,
    paddingRight: 25,
    backgroundColor: "rgba(81, 81, 81, 0.5)",
    alignSelf: "center",
  },
});

const menuBox = StyleSheet.create({
  menuBox: {
    height: 65,
    width: 375,
    marginBottom: 0,
    backgroundColor: "rgba(0, 0, 0, 1)",
    //alignSelf: "center",
  },
});

const appTitleFontStyles = StyleSheet.create({
  titleText: {
    fontFamily: "DamascusSemiBold",
    fontSize: 30,
    marginTop: 45,
    color: "white",
  },
});

const baseTextFontStyles = StyleSheet.create({
  baseText: {
    fontFamily: "DamascusSemiBold",
    fontSize: 20,
    borderColor: "white",
    padding: 5,
    borderWidth: 1,
    marginTop: 50,
    borderRadius: 10,
  },
});

const inputStyles = StyleSheet.create({
  workoutNameInput: {
    color: "white",
    textAlign: "left",
    //paddingTop: 5,
    fontSize: 20,
    height: 35,
    fontFamily: "DamascusSemiBold",
  },
});

const Workouts = () => {
  return (
    <ImageBackground
      blurRadius={10}
      resizeMode="cover"
      source={require("../assets/firstScreen.jpg")}
      style={styles.image}
    >
      <StyledContainer>
        <PageTitle style={appTitleFontStyles.titleText}>FiitTrack</PageTitle>
        <View style={styledSmallRectangle.rectangle}>
          <Text
            style={{
              color: "white",
              textAlign: "right",
              fontSize: 25,
              fontFamily: "DamascusSemiBold",
            }}
          >
            Workouts
          </Text>
        </View>
        <View style={styledBigRectangle.bigRectangle}>
          <DeleteIcon>
            <AntDesign name="minuscircle" size={25} color="white" />
          </DeleteIcon>
          <TextInput
            style={inputStyles.workoutNameInput}
            placeholder="Enter workout name"
            placeholderTextColor="white"
          />
          <View
            style={{
              borderBottomColor: "red",
              borderBottomWidth: 2.5,
            }}
          ></View>
        </View>
        {/* <View style={menuBox.menuBox}></View> */}
      </StyledContainer>
    </ImageBackground>
  );
};

export default Workouts;
