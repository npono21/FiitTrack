import React, { useState } from "react";

import {
  View,
  Platform,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { auth } from "../firebase";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  nameInputContainer: {
    backgroundColor: "white",
    alignSelf: "center",
    width: 300,
    padding: 12,
    borderRadius: 15,
    marginTop: 10,
    marginTop: 30,
    flexDirection: "row",
  },
  textInput: {
    fontSize: 17,
    textAlign: "left",
    color: "black",
    fontFamily: "System",
    width: 250,
  },
  emailInputContainer: {
    backgroundColor: "white",
    alignSelf: "center",
    width: 300,
    padding: 12,
    borderRadius: 15,
    marginTop: 15,
    flexDirection: "row",
  },
  passwordInputContainer: {
    backgroundColor: "white",
    alignSelf: "center",
    width: 300,
    padding: 12,
    borderRadius: 15,
    marginTop: 15,
    flexDirection: "row",
  },
  ageInputContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignSelf: "center",
    width: 100,
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
  },
  ageTextInput: {
    fontSize: 17,
    textAlign: "center",
    color: "black",
    fontFamily: "System",
  },
  weightInputContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignSelf: "center",
    width: 100,
    padding: 15,
    borderRadius: 15,
    marginTop: 15,
    marginLeft: 15,
  },
  buttonContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    width: 300,
    height: 50,
    borderRadius: 15,
    marginTop: 17,
    backgroundColor: "navy",
  },
  textView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  textStyle: {
    fontSize: 17,
    color: "grey",
    fontFamily: "System",
  },
});

const Signup = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));
  const [dob, setDob] = useState(); //Actual DOB chosen by the user.

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setDob(currentDate);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "black" }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ alignSelf: "center", marginTop: 125 }}>
          <Text style={{ fontFamily: "System", fontSize: 30, color: "white" }}>
            Create an account
          </Text>
        </View>
        <View style={styles.nameInputContainer}>
          <View style={{ paddingRight: 10 }}>
            <AntDesign name="user" size={20} color="black" />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            placeholderTextColor={"lightgrey"}
            textContentType="name"
          />
        </View>
        <View style={styles.emailInputContainer}>
          <View style={{ paddingRight: 10 }}>
            <AntDesign name="mail" size={20} color="black" />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor={"lightgrey"}
            textContentType="emailAddress"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.passwordInputContainer}>
          <View style={{ paddingRight: 10 }}>
            <AntDesign name="lock" size={20} color="black" />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor={"lightgrey"}
            textContentType="password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <View style={styles.passwordInputContainer}>
          <View style={{ paddingRight: 10 }}>
            <AntDesign name="lock" size={20} color="black" />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            placeholderTextColor={"lightgrey"}
            textContentType="password"
            secureTextEntry={true}
          />
        </View>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <View style={styles.ageInputContainer}>
            <TextInput
              style={styles.ageTextInput}
              placeholder="Age"
              placeholderTextColor={"lightgrey"}
            />
          </View>
          <View style={styles.weightInputContainer}>
            <TextInput
              style={styles.ageTextInput}
              placeholder="Weight"
              placeholderTextColor={"lightgrey"}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.buttonContainer}>
        <Button
          title="Create an Account"
          onPress={handleSignup}
          color="white"
          onPress={() => navigation.navigate("Workouts")}
        />
      </View>
      <View style={styles.textView}>
        <Text style={styles.textStyle}>Already have an account?</Text>
        <Button
          title="Sign in"
          color="lightblue"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;
