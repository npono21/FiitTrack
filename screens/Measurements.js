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

import { stylesMeasurements } from "../components/stylesMeasurements";

import { modalDialog } from "../components/stylesWorkouts";

// const pastMeasurementDates = [
//   { label: "Date 1", value: "Date 1" },
//   { label: "Date 2", value: "Date 2" },
//   { label: "Date 3", value: "Date 3" },
// ];

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

  return (
    <ImageBackground
      blurRadius={10}
      resizeMode="cover"
      source={require("../assets/firstScreen.jpg")}
      style={commonAppStyles.image}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={commonAppStyles.styledContainer}>
          <Text style={commonAppStyles.appPageTitle}>FiitTrack</Text>
          <View style={commonAppStyles.measurementsSubtitleContainer}>
            <View>
              <Text style={commonAppStyles.subtitleStyle}>Measurements</Text>
            </View>
          </View>
          <View style={{ marginTop: 15, marginLeft: 35 }}>
            <Text style={stylesMeasurements.textStyle}>
              View Past Measurements:
            </Text>
          </View>
          <View style={stylesMeasurements.pastMeasurementsDropDownPicker}>
            <View style={modalDialog.selectStyle}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                maxHeight={250}
                setValue={setValue}
                setItems={setItems}
                // setValue={(value) => setWorkoutType(value)}
                style={{
                  backgroundColor: "white",
                  borderWidth: 0,
                  width: 305,
                }}
                textStyle={{
                  fontSize: 15,
                  fontFamily: "System",
                }}
                dropDownContainerStyle={{
                  backgroundColor: "white",
                }}
              />
            </View>
          </View>
          <View style={stylesMeasurements.weightInputContainer}>
            <Text style={stylesMeasurements.textStyle}>Weight:</Text>
            <TextInput
              style={{ width: 75, textAlign: "center" }}
              keyboardType={"numeric"}
              keyboardAppearance={"dark"}
              backgroundColor={"white"}
            />
            <Text style={stylesMeasurements.textStyle}>LBS</Text>
            <Switch
              thumbColor={isEnabled ? "red" : "red"}
              ios_backgroundColor="black"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{
                transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
              }}
            />
            <Text style={stylesMeasurements.textStyle}>KG</Text>
          </View>
          <View style={stylesMeasurements.measurmentBoxContainer}>
            <View style={stylesMeasurements.measurementLRBoxContainer}>
              <View style={stylesMeasurements.measurementContainer}>
                <Text style={stylesMeasurements.textStyle}>Chest</Text>
              </View>
              <View style={stylesMeasurements.measurementContainer}>
                <Text style={stylesMeasurements.textStyle}>Shoulders</Text>
              </View>
              <View style={stylesMeasurements.measurementContainer}>
                <Text style={stylesMeasurements.textStyle}>Arms</Text>
              </View>
              <View style={stylesMeasurements.measurementContainer}>
                <Text style={stylesMeasurements.textStyle}>Glutes</Text>
              </View>
            </View>
            <View style={stylesMeasurements.measurementLRBoxContainer}>
              <View style={stylesMeasurements.measurementContainer}>
                <Text style={stylesMeasurements.textStyle}>Waist</Text>
              </View>
              <View style={stylesMeasurements.measurementContainer}>
                <Text style={stylesMeasurements.textStyle}>Thighs</Text>
              </View>
              <View style={stylesMeasurements.measurementContainer}>
                <Text style={stylesMeasurements.textStyle}>Calves</Text>
              </View>
              <View style={stylesMeasurements.measurementContainer}>
                <Text style={stylesMeasurements.textStyle}>Neck</Text>
              </View>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View style={stylesMeasurements.saveClearButton}>
              <Button title="Clear" style={{ textAlign: "center" }} />
            </View>
            <View style={stylesMeasurements.saveClearButton}>
              <Button title="Save" />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
