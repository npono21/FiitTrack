import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

import { View, Platform, Text, TextInput, Button } from "react-native";

import ProgressBar from "react-native-progress/Bar";

import LottieView from "lottie-react-native";

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

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ alignSelf: "center", marginTop: 100 }}>
        <ProgressBar progress={0.5} width={250} height={25} borderRadius={20} />
      </View>
      <View style={{ alignSelf: "center", marginTop: 75 }}>
        <Text style={{ fontFamily: "System", fontSize: 20, color: "white" }}>
          Create an account
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          alignSelf: "center",
          width: 300,
          padding: 12,
          borderRadius: 15,
          marginTop: 10,
          marginTop: 15,
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{
            fontSize: 17,
            textAlign: "left",
            color: "black",
            fontFamily: "System",
          }}
          placeholder="Name"
          placeholderTextColor={"lightgrey"}
        />
        <LottieView
          source={require("../assets/22146-progress-bar-and-task-completion.json")}
          autoPlay
          loop
          style={{ height: 25, alignSelf: "center" }}
          speed={0}
          left={100}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          alignSelf: "center",
          width: 300,
          padding: 12,
          borderRadius: 15,
          marginTop: 10,
          marginTop: 10,
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{
            fontSize: 17,
            textAlign: "left",
            color: "black",
            fontFamily: "System",
          }}
          placeholder="Email"
          placeholderTextColor={"lightgrey"}
        />
        <LottieView
          source={require("../assets/22146-progress-bar-and-task-completion.json")}
          autoPlay
          loop
          style={{ height: 25, alignSelf: "center" }}
          speed={0}
          left={102}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          alignSelf: "center",
          width: 300,
          padding: 12,
          borderRadius: 15,
          marginTop: 10,
          marginTop: 10,
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{
            fontSize: 17,
            textAlign: "left",
            color: "black",
            fontFamily: "System",
          }}
          placeholder="Password"
          placeholderTextColor={"lightgrey"}
        />
        <LottieView
          source={require("../assets/22146-progress-bar-and-task-completion.json")}
          autoPlay
          loop
          style={{ height: 25, alignSelf: "center" }}
          speed={0}
          left={86}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          alignSelf: "center",
          width: 300,
          padding: 12,
          borderRadius: 15,
          marginTop: 10,
          marginTop: 10,
          flexDirection: "row",
        }}
      >
        <TextInput
          style={{
            fontSize: 17,
            textAlign: "left",
            color: "black",
            fontFamily: "System",
          }}
          placeholder="Confirm Password"
          placeholderTextColor={"lightgrey"}
        />
        <LottieView
          source={require("../assets/22146-progress-bar-and-task-completion.json")}
          autoPlay
          loop
          style={{ height: 25, alignSelf: "center" }}
          speed={0}
          left={53}
        />
      </View>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            alignSelf: "center",
            width: 100,
            padding: 15,
            borderRadius: 15,
            marginTop: 15,
            marginRight: 15,
          }}
        >
          <TextInput
            style={{
              fontSize: 17,
              textAlign: "center",
              color: "black",
              fontFamily: "System",
            }}
            placeholder="Age"
            placeholderTextColor={"lightgrey"}
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            alignSelf: "center",
            width: 100,
            padding: 15,
            borderRadius: 15,
            marginTop: 15,
            marginLeft: 15,
          }}
        >
          <TextInput
            style={{
              fontSize: 17,
              textAlign: "center",
              color: "black",
              fontFamily: "System",
            }}
            placeholder="Weight"
            placeholderTextColor={"lightgrey"}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignContent: "center",
          alignSelf: "center",
          width: 300,
          height: 50,
          borderRadius: 15,
          marginTop: 17,
          backgroundColor: "navy",
        }}
      >
        <Button
          title="Create an Account"
          onPress={() => navigation.navigate("Workouts")}
          color="white"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            color: "grey",
            fontFamily: "System",
          }}
        >
          Already have an account?
        </Text>
        <Button
          title="Sign in"
          color="lightblue"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

export default Signup;
