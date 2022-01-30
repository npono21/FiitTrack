import React from "react";

import { Colors } from "../../components/stylesLoginRegister";
const { primary, tertiary } = Colors;

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Importing screens for Navigation.
import Splash from "../Splash";
import LandingPage from "../LandingPage";
import Login from "../Login";
import Signup from "../Signup";
import Workouts from "../Workouts";
import Measurements from "../Measurements";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Stack.Screen
          options={{ headerTintColor: primary }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerTintColor: primary }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{ headerTintColor: primary }}
          name="Workouts"
          component={Workouts}
        />
        <Stack.Screen
          options={{ headerTintColor: primary }}
          name="Measurements"
          component={Measurements}
        />
        <Stack.Screen
          options={{ headerTintColor: primary }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{ headerTintColor: primary }}
          name="LandingPage"
          component={LandingPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
