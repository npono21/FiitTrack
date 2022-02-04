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
                textStyle={commonAppStyles.regularTextStyle}
                dropDownContainerStyle={{
                  backgroundColor: "white",
                }}
              />
            </View>
          </View>
          <View style={stylesMeasurements.weightInputContainer}>
            <Text style={stylesMeasurements.textStyle}>Weight:</Text>
            <TextInput
              style={{ width: 75, textAlign: "center", height: 25 }}
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
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={stylesMeasurements.textStyle}>Chest</Text>
                  <AntDesign name="infocirlce" size={20} color="red" />
                </View>
                <View style={{ alignSelf: "center", marginTop: 10 }}>
                  <TextInput
                    style={stylesMeasurements.measurementInputStyle}
                    keyboardType={"numeric"}
                    keyboardAppearance={"dark"}
                    backgroundColor={"white"}
                    value={chest}
                    onChangeText={(value) => setChest(value)}
                  />
                </View>
              </View>

              <View style={stylesMeasurements.measurementContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={stylesMeasurements.textStyle}>Shoulders</Text>
                  <AntDesign name="infocirlce" size={20} color="red" />
                </View>
                <View style={{ alignSelf: "center", marginTop: 10 }}>
                  <TextInput
                    style={stylesMeasurements.measurementInputStyle}
                    textStyle={{ color: "red" }}
                    keyboardType={"numeric"}
                    keyboardAppearance={"dark"}
                    backgroundColor={"white"}
                    value={shoulders}
                    onChangeText={(value) => setShoulders(value)}
                  />
                </View>
              </View>

              <View style={stylesMeasurements.measurementContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={stylesMeasurements.textStyle}>Arms</Text>
                  <AntDesign name="infocirlce" size={20} color="red" />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    //marginTop: 2.5,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text style={stylesMeasurements.textStyle}>
                      {"  "}L:{"  "}
                    </Text>
                    <TextInput
                      style={stylesMeasurements.measurementInputStyle}
                      textStyle={{ color: "red" }}
                      keyboardType={"numeric"}
                      keyboardAppearance={"dark"}
                      backgroundColor={"white"}
                      value={leftArm}
                      onChangeText={(value) => setLeftArm(value)}
                    />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={stylesMeasurements.textStyle}>
                      {"  "}R:{"  "}
                    </Text>
                    <TextInput
                      style={stylesMeasurements.measurementInputStyle}
                      textStyle={{ color: "red" }}
                      keyboardType={"numeric"}
                      keyboardAppearance={"dark"}
                      backgroundColor={"white"}
                      value={rightArm}
                      onChangeText={(value) => setRightArm(value)}
                    />
                  </View>
                </View>
              </View>

              <View style={stylesMeasurements.measurementContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={stylesMeasurements.textStyle}>Glutes</Text>
                  <AntDesign name="infocirlce" size={20} color="red" />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text style={stylesMeasurements.textStyle}>
                      {"  "}L:{"  "}
                    </Text>
                    <TextInput
                      style={stylesMeasurements.measurementInputStyle}
                      textStyle={{ color: "red" }}
                      keyboardType={"numeric"}
                      keyboardAppearance={"dark"}
                      backgroundColor={"white"}
                      value={leftGlute}
                      onChangeText={(value) => setLeftGlute(value)}
                    />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={stylesMeasurements.textStyle}>
                      {"  "}R:{"  "}
                    </Text>
                    <TextInput
                      style={stylesMeasurements.measurementInputStyle}
                      textStyle={{ color: "red" }}
                      keyboardType={"numeric"}
                      keyboardAppearance={"dark"}
                      backgroundColor={"white"}
                      value={rightGlute}
                      onChangeText={(value) => setRightGlute(value)}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={stylesMeasurements.measurementLRBoxContainer}>
              <View style={stylesMeasurements.measurementContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={stylesMeasurements.textStyle}>Waist</Text>
                  <AntDesign name="infocirlce" size={20} color="red" />
                </View>
                <View style={{ alignSelf: "center", marginTop: 10 }}>
                  <TextInput
                    style={stylesMeasurements.measurementInputStyle}
                    textStyle={{ color: "red" }}
                    keyboardType={"numeric"}
                    keyboardAppearance={"dark"}
                    backgroundColor={"white"}
                    value={waist}
                    onChangeText={(value) => setWaist(value)}
                  />
                </View>
              </View>

              <View style={stylesMeasurements.measurementContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={stylesMeasurements.textStyle}>Thighs</Text>
                  <AntDesign name="infocirlce" size={20} color="red" />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text style={stylesMeasurements.textStyle}>
                      {"  "}L:{"  "}
                    </Text>
                    <TextInput
                      style={stylesMeasurements.measurementInputStyle}
                      textStyle={{ color: "red" }}
                      keyboardType={"numeric"}
                      keyboardAppearance={"dark"}
                      backgroundColor={"white"}
                      value={leftThigh}
                      onChangeText={(value) => setLeftThigh(value)}
                    />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={stylesMeasurements.textStyle}>
                      {"  "}R:{"  "}
                    </Text>
                    <TextInput
                      style={stylesMeasurements.measurementInputStyle}
                      textStyle={{ color: "red" }}
                      keyboardType={"numeric"}
                      keyboardAppearance={"dark"}
                      backgroundColor={"white"}
                      value={rightThigh}
                      onChangeText={(value) => setRightThigh(value)}
                    />
                  </View>
                </View>
              </View>

              <View style={stylesMeasurements.measurementContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={stylesMeasurements.textStyle}>Calves</Text>
                  <AntDesign name="infocirlce" size={20} color="red" />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text style={stylesMeasurements.textStyle}>
                      {"  "}L:{"  "}
                    </Text>
                    <TextInput
                      style={stylesMeasurements.measurementInputStyle}
                      textStyle={{ color: "red" }}
                      keyboardType={"numeric"}
                      keyboardAppearance={"dark"}
                      backgroundColor={"white"}
                      value={leftCalve}
                      onChangeText={(value) => setLeftCalve(value)}
                    />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={stylesMeasurements.textStyle}>
                      {"  "}R:{"  "}
                    </Text>
                    <TextInput
                      style={stylesMeasurements.measurementInputStyle}
                      textStyle={{ color: "red" }}
                      keyboardType={"numeric"}
                      keyboardAppearance={"dark"}
                      backgroundColor={"white"}
                      value={rigthCalve}
                      onChangeText={(value) => setRightCalve(value)}
                    />
                  </View>
                </View>
              </View>

              <View style={stylesMeasurements.measurementContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={stylesMeasurements.textStyle}>Neck</Text>
                  <AntDesign name="infocirlce" size={20} color="red" />
                </View>
                <View style={{ alignSelf: "center", marginTop: 10 }}>
                  <TextInput
                    style={stylesMeasurements.measurementInputStyle}
                    textStyle={{ color: "red" }}
                    keyboardType={"numeric"}
                    keyboardAppearance={"dark"}
                    backgroundColor={"white"}
                    value={neck}
                    onChangeText={(value) => {
                      setNeck(value);
                      // console.log(value);
                    }}
                  />
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              backgroundColor: "white",
              width: 250,
              height: 45,
              alignSelf: "center",
              padding: 5,
              marginTop: 10,
              borderWidth: 1.5,
              borderColor: "rgba(255, 0, 0, 0.5)",
              borderRadius: 10,
            }}
          >
            <View style={stylesMeasurements.saveClearButton}>
              <Button title="Clear" />
            </View>
            <View
              style={{
                borderRightWidth: 2,
              }}
            />
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
