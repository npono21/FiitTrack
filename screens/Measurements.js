import React from "react";

import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { commonAppStyles } from "../components/commonStylesApp";

const Measurements = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={10}
      resizeMode="cover"
      source={require("../assets/firstScreen.jpg")}
      style={commonAppStyles.image}
    >
      <ScrollView>
        <View style={commonAppStyles.styledContainer}>
          <Text style={commonAppStyles.appPageTitle}>FiitTrack</Text>
        </View>
        <View style={commonAppStyles.measurementsSubtitleContainer}>
          <View>
            <Text
              style={{
                color: "red",
                fontSize: 20,
                fontFamily: "System",
              }}
            >
              Measurements
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={commonAppStyles.menuBarStyle}>
        <View style={commonAppStyles.menuIconStyle}>
          <AntDesign
            name="home"
            size={45}
            color="red"
            onPress={() => navigation.navigate("Workouts")}
          />
          <TouchableOpacity style={commonAppStyles.measurementsButton}>
            <AntDesign name="barschart" size={45} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Measurements;
