import React, { useState, useReducer, useEffect } from "react";

import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Switch,
  Button,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import DropDownPicker from "react-native-dropdown-picker";

import { commonAppStyles } from "../components/commonStylesApp";

import { imageUploaderStyles } from "../components/imageUploaderStyles";

import { stylesMeasurements } from "../components/stylesMeasurements";

import { modalDialog } from "../components/stylesWorkouts";

const Measurements = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const [items, setItems] = useState([
    { label: "Date 1", value: "Date 1" },
    { label: "Date 2", value: "Date 2" },
    { label: "Date 3", value: "Date 3" },
  ]);
  const [chest, setChest] = useState("");
  const [shoulders, setShoulders] = useState("");
  const [rightArm, setRightArm] = useState("");
  const [leftArm, setLeftArm] = useState("");
  const [rightGlute, setRightGlute] = useState("");
  const [leftGlute, setLeftGlute] = useState("");
  const [waist, setWaist] = useState("");
  const [rightThigh, setRightThigh] = useState("");
  const [leftThigh, setLeftThigh] = useState("");
  const [rigthCalve, setRightCalve] = useState("");
  const [leftCalve, setLeftCalve] = useState("");
  const [neck, setNeck] = useState("");

  return (
    <ImageBackground
      blurRadius={100}
      resizeMode="cover"
      source={require("../assets/firstScreen.jpg")}
      style={commonAppStyles.image}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={{ marginTop: 50 }}>
            <Text
              style={{
                fontSize: 45,
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
                fontFamily: "System",
              }}
            >
              Profile
            </Text>
          </View>
          <View
            style={{
              height: 120,
              width: 120,
              borderRadius: 60,
              borderWidth: 3,
              borderColor: "navy",
              backgroundColor: "lightgray",
              alignSelf: "center",
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <AntDesign name="pluscircle" size={50} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ paddingBottom: 35, paddingTop: 5 }}>
            <TextInput
              style={{
                fontSize: 25,
                textAlign: "center",
                color: "white",
                fontFamily: "System",
              }}
              placeholder="Enter Name"
              placeholderTextColor={"white"}
            />
          </View>
          <View
            style={{
              alignSelf: "center",
            }}
          >
            <View
              style={{
                height: 150,
                width: 325,
                borderRadius: 15,
                backgroundColor: "white",
                padding: 10,
                borderWidth: 3,
                borderColor: "navy",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "black",
                    fontFamily: "System",
                  }}
                >
                  Weight
                </Text>
                <AntDesign name="pluscircle" size={25} color="black" />
              </View>
            </View>
            <View
              style={{
                height: 270,
                width: 325,
                borderRadius: 15,
                backgroundColor: "white",
                padding: 10,
                marginTop: 10,
                borderWidth: 3,
                borderColor: "navy",
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "black",
                    fontFamily: "System",
                  }}
                >
                  Measurements
                </Text>
                <AntDesign name="pluscircle" size={25} color="black" />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View>
        <View style={commonAppStyles.menuBarStyle}>
          <View style={commonAppStyles.menuIconStyle}>
            <AntDesign
              name="home"
              size={45}
              color="white"
              onPress={() => navigation.navigate("Workouts")}
            />
            <TouchableOpacity style={commonAppStyles.measurementsButton}>
              <AntDesign name="barschart" size={45} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Measurements;
