import React, { useState, useReducer, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { auth } from "../firebase";

import DropDownPicker from "react-native-dropdown-picker";

import {
  modalDialog,
  styles,
  styledRectangle,
  appFontStyles,
} from "../components/stylesWorkouts";

import { commonAppStyles } from "../components/commonStylesApp";

const initialWorkoutsList = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          type: action.payload.type,
        },
      ];
    case "DEL":
      return state.filter((obj) => obj.id !== action.payload.id);
    default:
      return state;
  }
};

const workoutTypes = [
  { label: "Strength", value: "Strength" },
  { label: "Cardio", value: "Cardio" },
  { label: "Resistance", value: "Resistance" },
  { label: "Mobility", value: "Mobility" },
  { label: "Recovery", value: "Recovery" },
  { label: "HIIT", value: "HIIT" },
  { label: "Aerobic", value: "Aerobic" },
  { label: "Anaerobic", value: "Anaerobic" },
];

const Workouts = ({ navigation }) => {
  const [workoutsList, dispatch] = useReducer(reducer, initialWorkoutsList);
  const [modalVisible, setModalVisible] = useState(false);
  const [workoutName, setWorkoutName] = useState("");
  const [workoutType, setWorkoutType] = useState("");
  const [open, setOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    console.log("Type: ", workoutType);
    console.log("List: ", workoutsList);
  }, [workoutType, workoutsList]);

  const handleAddIconClick = () => {
    setWorkoutName("");
    setWorkoutType("");
    setModalVisible(true);
  };

  const handleDeleteIconClick = (id) => {
    Alert.alert(
      "Confirm Action",
      "Are you sure you want to delete the workout?",
      [
        {
          text: "Go Back",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => dispatch({ type: "DEL", payload: { id: id } }),
        },
      ]
    );
  };

  const toggleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  const handleSubmit = () => {
    const id = Date.now().toString(36);
    dispatch({
      type: "ADD",
      payload: { id: id, name: workoutName, type: workoutType },
    });
    setModalVisible(!modalVisible);
  };
  //prettier-ignore
  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setCurrentDate(date + "-" + month + "-" + year);
  }, []);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <ScrollView>
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
            Workouts
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              paddingRight: 20,
            }}
          >
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onDismiss={toggleModalVisibility}
            >
              <View style={modalDialog.centeredView}>
                <View style={modalDialog.modalView}>
                  <View style={modalDialog.titleView}>
                    <Text style={modalDialog.modalTitle}>
                      Create a New Workout
                    </Text>
                  </View>
                  <TextInput
                    style={modalDialog.workoutNameInput}
                    placeholder="Enter Workout Name..."
                    placeholderTextColor={"black"}
                    keyboardAppearance={"dark"}
                    spellCheck={false}
                    value={workoutName}
                    onChangeText={(value) => setWorkoutName(value)}
                  />
                  <View style={modalDialog.typeViewStyle}>
                    <Text style={modalDialog.typeStyle}>Workout Type:</Text>
                    <View style={modalDialog.selectStyle}>
                      <DropDownPicker
                        open={open}
                        value={workoutType}
                        items={workoutTypes}
                        setOpen={setOpen}
                        maxHeight={250}
                        setValue={(value) => setWorkoutType(value)}
                        style={{
                          backgroundColor: "white",
                          borderWidth: 0,
                          width: 150,
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
                  <View style={modalDialog.buttonContainer}>
                    <View style={modalDialog.cancelButtonStyle}>
                      <Button
                        title="Cancel"
                        onPress={toggleModalVisibility}
                        style={{ marginRight: 20 }}
                      />
                    </View>
                    <View
                      style={{
                        borderRightWidth: 0.2,
                      }}
                    />
                    <View style={modalDialog.submitButtonStyle}>
                      <Button
                        title="Submit"
                        onPress={handleSubmit}
                        disabled={!workoutName || !workoutType}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
            <View style={commonAppStyles.workoutsSubtitleContainer}>
              <Text style={commonAppStyles.subtitleStyle}>Workouts</Text>
            </View>
            <TouchableOpacity
              style={styles.deleteAddIcon}
              onPress={handleAddIconClick}
            >
              <AntDesign name="pluscircle" size={25} color="red" />
            </TouchableOpacity>
          </View>
          {workoutsList.map((obj, index) => {
            return (
              <View style={styledRectangle.workoutInfoContainer} key={index}>
                <TouchableOpacity
                  style={styles.deleteAddIcon}
                  onPress={() => handleDeleteIconClick(obj.id)}
                >
                  <AntDesign name="minuscircle" size={25} color="white" />
                </TouchableOpacity>
                <TextInput
                  style={styles.workoutNameInput}
                  value={obj.name}
                  editable={false}
                />
                <View
                  style={{
                    borderBottomColor: "red",
                    borderBottomWidth: 2.5,
                  }}
                ></View>
                <View style={appFontStyles.workoutInfoStyle}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={appFontStyles.workoutInfoText}>
                      Date Completed:{" "}
                    </Text>
                    <Text style={commonAppStyles.regularTextStyle}>
                      {currentDate}
                    </Text>
                  </View>
                  <Text style={commonAppStyles.regularTextStyle}>
                    {obj.type}
                  </Text>
                  <Text style={appFontStyles.workoutInfoText}>Duration: </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={{ marginBottom: 20 }}>
        <View style={commonAppStyles.menuBarStyle}>
          <View style={commonAppStyles.menuIconStyle}>
            <AntDesign name="home" size={45} color="black" />
            <TouchableOpacity
              style={commonAppStyles.measurementsButton}
              onPress={() => navigation.navigate("Measurements")}
            >
              <AntDesign name="barschart" size={45} color="black" />
            </TouchableOpacity>
          </View>
          <Button title="Sign Out" onPress={handleSignOut} />
        </View>
      </View>
    </View>
  );
};

export default Workouts;
