import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

import {
  StyledContainer,
  PageTitle,
  StyledInputLabel,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  InnerContainer,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  SubTitle,
  Colors,
} from "./../components/styles";
import {
  View,
  TouchableOpacity,
  Platform,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ImageBackground,
  StyleSheet,
} from "react-native";

//Color Structuring
const { brand, darkLight, primary } = Colors;

//Keyboard avoiding wrapper.
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
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

  const showDatePicker = () => {
    console.log("DatePicker Called");
    setShow(true);
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <ImageBackground
          blurRadius={8}
          resizeMode="cover"
          source={require("../assets/signupScreen.jpg")}
          style={styles.image}
        >
          <StatusBar style="dark" />
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
              style={{
                backgroundColor: "yellow",
              }}
            />
          )}

          <InnerContainer>
            <PageTitle>FitTrack</PageTitle>
            <SubTitle>Account Signup</SubTitle>

            <Formik
              initialValues={{
                fullName: "",
                email: "",
                dateOfBirth: "",
                password: "",
                confirmPassword: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <StyledFormArea>
                  <MyTextInput
                    label="Full Name"
                    icon="person"
                    placeholder="John/Jane Doe"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("fullName")}
                    onBlur={handleBlur("fullName")}
                    value={values.fullName}
                  />
                  <MyTextInput
                    label="Email Address"
                    icon="mail"
                    placeholder="nickpon123@gmail.com"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  <MyTextInput
                    label="Date of Birth"
                    placeholder="YYYY - MM - DD"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("dateOfBirth")}
                    onBlur={handleBlur("dateOfBirth")}
                    value={dob ? dob.toDateString() : ""}
                    icon="calendar"
                    editable={false}
                    isDate={true}
                    showDatePicker={showDatePicker}
                  />
                  <MyTextInput
                    label="Password"
                    icon="lock"
                    placeholder="* * * * * * * *"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                  />
                  <MyTextInput
                    label="Confirm Password"
                    icon="lock"
                    placeholder="* * * * * * * *"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                  />

                  <MsgBox>...</MsgBox>
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Register</ButtonText>
                  </StyledButton>
                  <Line />
                  <ExtraView>
                    <ExtraText>Already have an account? </ExtraText>
                    <TextLink onPress={() => navigation.navigate("Login")}>
                      <TextLinkContent>Login</TextLinkContent>
                    </TextLink>
                  </ExtraView>
                </StyledFormArea>
              )}
            </Formik>
          </InnerContainer>
        </ImageBackground>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  isDate,
  showDatePicker,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color="red" />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>

      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} pointerEvents="none" />
          {/* <Text>Enter you BOD</Text> */}
        </TouchableOpacity>
      )}

      {!isDate && <StyledTextInput {...props} />}

      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;
