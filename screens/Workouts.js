import React, { useState, useReducer, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Button,
  Modal,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
//import uniqid from 'uniqid';

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faWeight } from "@fortawesome/free-solid-svg-icons";

import {
  MeasurementsButton,
  StyledContainer,
  BlackedOutBackground,
  HomeTitle,
  PageTitle,
  SubTitle,
  Colors,
  DeleteIcon,
  AddIcon,
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cancelButton: {
    paddingLeft: 10,
  },
  submitButton: {
    paddingRight: 10,
  },
});

const styledSmallRectangle = StyleSheet.create({
  rectangle: {
    // position: "absolute",
    marginTop: 15,
    marginLeft: 7,
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 10,
    backgroundColor: "rgba(81, 81, 81, 0.5)",
    width: 130,
  },
});

const styledBigRectangle = StyleSheet.create({
  bigRectangle: {
    // position: "absolute",
    // height: 140,
    width: 360,
    marginTop: 10,
    marginLeft: 0,
    borderRadius: 28,
    paddingLeft: 25,
    paddingTop: 15,
    paddingRight: 25,
    paddingBottom: 15,
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
    color: "black",
    fontSize: 20,
    height: 40,
  },
});

const initialWorkoutsList = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
        },
      ];
    case "DEL":
      return state.filter((obj) => obj.id !== action.payload.id);
    default:
      return state;
  }
};

const Workouts = () => {
  const [workoutsList, dispatch] = useReducer(reducer, initialWorkoutsList);
  const [modalVisible, setModalVisible] = useState(false);
  const [workoutName, setWorkoutName] = useState("");

  useEffect(() => {
    //    console.log("Workout Name", workoutName);
  }, [workoutName]);

  const handleAddIconClick = (e) => {
    setWorkoutName("");
    setModalVisible(true);
  };

  const handleDeleteIconClick = (id) => {
    dispatch({ type: "DEL", payload: { id: id } });
  };

  const toggleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  const handleSubmit = () => {
    const id = Date.now().toString(36);
    dispatch({ type: "ADD", payload: { id: id, name: workoutName } });
    setModalVisible(!modalVisible);
  };

  return (
    <ImageBackground
      blurRadius={10}
      resizeMode="cover"
      source={require("../assets/firstScreen.jpg")}
      style={styles.image}
    >
      <StyledContainer>
        <PageTitle style={appTitleFontStyles.titleText}>FiitTrack</PageTitle>
        <View
          style={{
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "space-between",
            paddingRight: 20,
          }}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onDismiss={toggleModalVisibility}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text>Please Enter Workout Name</Text>
                <TextInput
                  placeholder="Workout Name"
                  // color={"black"}
                  value={workoutName}
                  style={inputStyles.workoutNameInput}
                  onChangeText={(value) => setWorkoutName(value)}
                />
                {/** This button is responsible to close the modal */}
                <Button
                  style={styles.cancelButton}
                  title="Cancel"
                  onPress={toggleModalVisibility}
                  color={"black"}
                />
                <Button
                  style={styles.submitButton}
                  title="Submit"
                  onPress={handleSubmit}
                  color={"black"}
                />
              </View>
            </View>
          </Modal>

          <View style={styledSmallRectangle.rectangle}>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontFamily: "DamascusSemiBold",
              }}
            >
              Workouts
            </Text>
          </View>
          <AddIcon onPress={handleAddIconClick}>
            <AntDesign name="pluscircle" size={25} color="white" />
          </AddIcon>
        </View>
        {workoutsList.map((obj, index) => {
          return (
            <View style={styledBigRectangle.bigRectangle} key={index}>
              <DeleteIcon onPress={() => handleDeleteIconClick(obj.id)}>
                <AntDesign name="minuscircle" size={25} color="white" />
              </DeleteIcon>
              <TextInput
                style={inputStyles.workoutNameInput}
                value={obj.name}
              />
              <View
                style={{
                  borderBottomColor: "red",
                  borderBottomWidth: 2.5,
                }}
              ></View>
            </View>
          );
        })}
      </StyledContainer>
    </ImageBackground>
  );
};

export default Workouts;
