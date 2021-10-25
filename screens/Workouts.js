import React, { useState, useReducer, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Modal,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import {
  StyledContainer,
  PageTitle,
  Colors,
  DeleteIcon,
  AddIcon,
} from "../components/styles";

// import {
//   styledSmallRectangle,
//   styledBigRectangle,
//   menuBox,
//   appTitleFontStyles,
//   baseTextFontStyles,
//   inputStyles,
// } from "../components/stylesWorkouts";

const { brand, darkLight, primary } = Colors;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    width: "75%",
  },
  cancelButton: {
    paddingLeft: 10,
    color: "white",
  },
  submitButton: {
    paddingRight: 10,
    color: "white",
  },
});

const styledSmallRectangle = StyleSheet.create({
  rectangle: {
    marginTop: 15,
    marginLeft: 0,
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
    fontSize: 25,
    height: 40,
    fontWeight: "bold",
    padding: 20,
  },
  typeStyle: {
    color: "white",
    fontSize: 20,
    paddingTop: 10,
  },
  typeViewStyle: {
    //flexDirection: "row",
  },
});

const buttonView = StyleSheet.create({
  buttonStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
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

const getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  return date + "-" + month + "-" + year;
};

const Workouts = () => {
  const [workoutsList, dispatch] = useReducer(reducer, initialWorkoutsList);
  const [modalVisible, setModalVisible] = useState(false);
  const [workoutName, setWorkoutName] = useState("");

  const [workoutType, setWorkoutType] = useState("Unkown");

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
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onDismiss={toggleModalVisibility}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TextInput
                  style={inputStyles.workoutNameInput}
                  placeholder="Workout Name"
                  placeholderTextColor={"white"}
                  keyboardAppearance={"dark"}
                  spellCheck={false}
                  textAlign={"center"}
                  value={workoutName}
                  onChangeText={(value) => setWorkoutName(value)}
                />
                <View style={inputStyles.typeViewStyle}>
                  <Text style={inputStyles.typeStyle}>Workout Type:</Text>
                </View>
                <View style={buttonView.buttonStyle}>
                  <Button
                    title="Cancel"
                    onPress={toggleModalVisibility}
                    style={{ marginRight: 20 }}
                  />
                  <Button title="Submit" onPress={handleSubmit} />
                </View>
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
