import React, { useState, useReducer, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Modal,
  ScrollView,
  Alert,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import DropDownPicker from "react-native-dropdown-picker";

import {
  StyledContainer,
  PageTitle,
  DeleteIcon,
  AddIcon,
  MeasurementsButton,
} from "../components/styles";

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
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
  workoutNameInput: {
    color: "white",
    fontSize: 25,
    height: 40,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

const modalDialog = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "85%",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "500",
  },
  titleView: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  workoutNameInput: {
    fontSize: 15,
    height: 40,
    marginTop: 15,
    paddingLeft: 10,
    width: "85%",
    marginLeft: 22,
    borderWidth: 3,
    borderColor: "rgba(0, 122, 255, 0.5)",
    borderRadius: 5,
  },
  typeStyle: {
    fontSize: 15,
    marginRight: 10,
  },
  typeViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  selectStyle: {},
  dropDownPicker: {},
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
    padding: 5,
    width: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: "space-evenly",
    borderTopWidth: 0.2,
  },
  cancelButtonStyle: {},
  submitButtonStyle: {},
});

const styledSmallRectangle = StyleSheet.create({
  rectangle: {
    marginTop: 15,
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
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
    padding: 10,
    backgroundColor: "rgba(81, 81, 81, 0.35)",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "red",
  },
});

const appFontStyles = StyleSheet.create({
  titleText: {
    fontFamily: "System",
    fontSize: 30,
    marginTop: 45,
    color: "white",
  },
  workoutInfoStyle: {
    flexDirection: "column",
    marginTop: 10,
    marginLeft: 10,
  },
  workoutInfoText: {
    color: "red",
    fontSize: 15,
    fontFamily: "System",
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

const Workouts = ({ navigation }) => {
  const [workoutsList, dispatch] = useReducer(reducer, initialWorkoutsList);
  const [modalVisible, setModalVisible] = useState(false);
  const [workoutName, setWorkoutName] = useState("");

  useEffect(() => {}, [workoutName]);

  const handleAddIconClick = () => {
    setWorkoutName("");
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
    dispatch({ type: "ADD", payload: { id: id, name: workoutName } });
    setModalVisible(!modalVisible);
  };
  //prettier-ignore
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setCurrentDate(date + "-" + month + "-" + year);
  }, []);

  const [workoutType, setWorkoutType] = useState();

  const handleSelectWorkoutType = (e) => {
    setWorkoutType();
    setModalVisible(true);
  };

  return (
    <ImageBackground
      blurRadius={10}
      resizeMode="cover"
      source={require("../assets/firstScreen.jpg")}
      style={styles.image}
    >
      <ScrollView>
        <StyledContainer>
          <PageTitle style={appFontStyles.titleText}>FiitTrack</PageTitle>
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
                        items={[
                          { label: "Item 1", value: "Item 1" },
                          { label: "Item 2", value: "Item 2" },
                          { label: "Item 3", value: "Item 3" },
                          { label: "Item 4", value: "Item 4" },
                          { label: "Item 5", value: "Item 5" },
                        ]}
                        containerStyle={{
                          width: 150,
                        }}
                        dropDownStyle={{ backgroundColor: "#fafafa" }}
                        onChangeItem={(item) =>
                          console.log(item.label, item.value)
                        }
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
                        disabled={!workoutName}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </Modal>

            <View style={styledSmallRectangle.rectangle}>
              <Text
                style={{
                  color: "red",
                  fontSize: 20,
                  fontFamily: "System",
                }}
              >
                Workouts
              </Text>
            </View>
            <AddIcon onPress={handleAddIconClick}>
              <AntDesign name="pluscircle" size={25} color="red" />
            </AddIcon>
          </View>
          {workoutsList.map((obj, index) => {
            return (
              <View style={styledBigRectangle.bigRectangle} key={index}>
                <DeleteIcon onPress={() => handleDeleteIconClick(obj.id)}>
                  <AntDesign name="minuscircle" size={25} color="white" />
                </DeleteIcon>
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
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        fontFamily: "System",
                      }}
                    >
                      {currentDate}
                    </Text>
                  </View>
                  <Text style={appFontStyles.workoutInfoText}>
                    Workout Type:{" "}
                  </Text>
                  <Text style={appFontStyles.workoutInfoText}>Duration: </Text>
                </View>
              </View>
            );
          })}
        </StyledContainer>
      </ScrollView>
      <View style={styles.menuBarStyles}>
        <View style={styles.menuIconStyles}>
          <AntDesign name="home" size={45} color="red" />
          <MeasurementsButton
            onPress={() => navigation.navigate("Measurements")}
          >
            <AntDesign name="barschart" size={45} color="red" />
          </MeasurementsButton>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Workouts;

{
  /* <Picker
  selectedValue={workoutType}
  onValueChange={(itemValue, itemIndex) => setWorkoutType(itemValue)}
>
  <Picker.Item label="Strength" value="Strength" color="white" />
  <Picker.Item label="Cardio" value="Cardio" color="white" />
  <Picker.Item label="Resistance" value="Resistance" color="white" />
  <Picker.Item label="HIIT" value="HIIT" color="white" />
  <Picker.Item label="Recovery" value="Recovery" color="white" />
</Picker>; */
}
