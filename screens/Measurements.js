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
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={commonAppStyles.styledContainer}>
        <Text
          style={{
            color: "white",
            fontFamily: "System",
            fontSize: 40,
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          Profile
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            padding: 15,
            height: 75,
            position: "absolute",
            bottom: 0,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              position: "absolute",
            }}
          >
            <View style={{ marginLeft: 75 }}>
              <AntDesign
                name="home"
                size={40}
                color="grey"
                onPress={() => navigation.navigate("Workouts")}
              />
            </View>
            <View style={{ marginLeft: 160 }}>
              <AntDesign name="user" size={40} color="grey" />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default Measurements;
