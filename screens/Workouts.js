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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
    alignItems: "center",
    width: "85%",
    borderColor: "red",
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

const appTitleFontStyles = StyleSheet.create({
  titleText: {
    fontFamily: "DamascusSemiBold",
    fontSize: 30,
    marginTop: 45,
    color: "white",
  },
});

const inputStyles = StyleSheet.create({
  workoutNameInput: {
    color: "white",
    fontSize: 20,
    height: 40,
    fontWeight: "bold",
  },
  typeStyle: {
    color: "white",
    fontSize: 20,
    paddingTop: 10,
  },
  typeViewStyle: {
    flexDirection: "row",
  },
});

const buttonView = StyleSheet.create({
  cancelButtonStyle: {
    flexDirection: "row",
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "red",
    borderWidth: 2,
  },
  submitButtonStyle: {
    flexDirection: "row",
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: 20,
    borderColor: "red",
    borderWidth: 2,
  },
  selectStyle: {
    flexDirection: "row",
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 2,
    borderColor: "red",
  },
  workoutInfoStyle: {
    flexDirection: "column",
    marginTop: 10,
  },
  workoutInfoText: {
    color: "red",
    fontSize: 15,
    fontFamily: "DamascusSemiBold",
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
                  <View>
                    <TextInput
                      style={inputStyles.workoutNameInput}
                      placeholder="Enter Workout Name..."
                      placeholderTextColor={"white"}
                      keyboardAppearance={"dark"}
                      spellCheck={false}
                      textAlign={"center"}
                      value={workoutName}
                      onChangeText={(value) => setWorkoutName(value)}
                    />
                  </View>
                  <View style={inputStyles.typeViewStyle}>
                    <Text style={inputStyles.typeStyle}>Workout Type:</Text>
                    <View style={buttonView.selectStyle}>
                      <DropDownPicker
                        items={[
                          { label: "Item 1", value: "Item 1" },
                          { label: "Item 2", value: "Item 2" },
                          { label: "Item 3", value: "Item 3" },
                          { label: "Item 4", value: "Item 4" },
                          { label: "Item 5", value: "Item 5" },
                        ]}
                        containerStyle={{
                          height: 40,
                          width: 150,
                          marginBottom: 5,
                        }}
                        style={{ backgroundColor: "#fafafa" }}
                        dropDownStyle={{ backgroundColor: "#fafafa" }}
                        onChangeItem={(item) =>
                          console.log(item.label, item.value)
                        }
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <View style={buttonView.cancelButtonStyle}>
                      <Button
                        title="Cancel"
                        onPress={toggleModalVisibility}
                        style={{ marginRight: 20 }}
                      />
                    </View>
                    <View style={buttonView.submitButtonStyle}>
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
                  fontFamily: "DamascusSemiBold",
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
                  style={inputStyles.workoutNameInput}
                  value={obj.name}
                />
                <View
                  style={{
                    borderBottomColor: "red",
                    borderBottomWidth: 2.5,
                  }}
                ></View>
                <View style={buttonView.workoutInfoStyle}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={buttonView.workoutInfoText}>
                      Date Completed:{" "}
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontSize: 15,
                        fontFamily: "DamascusSemiBold",
                      }}
                    >
                      {currentDate}
                    </Text>
                  </View>
                  <Text style={buttonView.workoutInfoText}>Workout Type: </Text>
                  <Text style={buttonView.workoutInfoText}>Duration: </Text>
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
