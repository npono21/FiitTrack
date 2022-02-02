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
import ForgotPassword1 from "../ForgotPassword1";
import ForgotPassword2 from "../ForgotPassword2";
import ResetPassword from "../ResetPassword";
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
        initialRouteName="Signup"
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
        <Stack.Screen
          options={{ headerTintColor: primary }}
          name="ForgotPassword1"
          component={ForgotPassword1}
        />
        <Stack.Screen
          options={{ headerTintColor: primary }}
          name="ForgotPassword2"
          component={ForgotPassword2}
        />
        <Stack.Screen
          options={{ headerTintColor: primary }}
          name="ResetPassword"
          component={ResetPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
