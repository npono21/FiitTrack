import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

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
} from './../components/styles';
import {View, TouchableOpacity } from 'react-native';


//Color Structuring
const {brand, darkLight, primary} = Colors;

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(1990, 0, 1));

  const [dob, setDob] = useState();  //Actual DOB chosen by the user.

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow('date');
  };

  return(
    <StyledContainer>
      <StatusBar style = "dark" />
      <InnerContainer>
        <PageTitle>FitTrack</PageTitle>
        <SubTitle>Account Signup</SubTitle>
        {console.log("Show: ", show)}
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

        <Formik
          initialValues = {{fullName: '',email: '', dateOfBirth: '',  password: '', confirmPassword: ''}}
          onSubmit = {(values) => {
            console.log(values);
          }}
        > 
          {({handleChange, handleBlur, handleSubmit, values}) => (
          <StyledFormArea>
              <MyTextInput 
                label = "Full Name"
                icon = "person"
                placeholder = "John/Jane Doe"
                placeholderTextColor = {darkLight}
                onChangeText = {handleChange('fullName')}
                onBlur = {handleBlur('fullName')}
                value = {values.fullName}
              />
              <MyTextInput 
                label = "Email Address"
                icon = "mail"
                placeholder = "nickpon123@gmail.com"
                placeholderTextColor = {darkLight}
                onChangeText = {handleChange('email')}
                onBlur = {handleBlur('email')}
                value = {values.email}
                keyboardType = 'email-address'
              />
              <MyTextInput 
                label="Date of Birth"
                placeholder="YYYY - MM - DD"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                value={dob ? dob.toDateString() : ''}
                icon="calendar"
                editable={false}
                isDate={true}
                showDatePicker={showDatePicker}
              />
              <MyTextInput 
                label = "Password"
                icon = "lock"
                placeholder = "* * * * * * * *"
                placeholderTextColor = {darkLight}
                onChangeText = {handleChange('password')}
                onBlur = {handleBlur('password')}
                value = {values.password}
                secureTextEntry = {hidePassword}
                isPassword = {true}
                hidePassword = {hidePassword}
                setHidePassword = {setHidePassword}
              />
              <MyTextInput 
                label = "Confirm Password"
                icon = "lock"
                placeholder = "* * * * * * * *"
                placeholderTextColor = {darkLight}
                onChangeText = {handleChange('confirmPassword')}
                onBlur = {handleBlur('confirmPassword')}
                value = {values.confirmPassword}
                secureTextEntry = {hidePassword}
                isPassword = {true}
                hidePassword = {hidePassword}
                setHidePassword = {setHidePassword}
              />

              <MsgBox>...</MsgBox>
              <StyledButton onPress = {handleSubmit}>
                <ButtonText>Register</ButtonText>
              </StyledButton>
              <Line/>
              <ExtraView>
                <ExtraText>Already have an account? </ExtraText>
                <TextLink>
                  <TextLinkContent>Login</TextLinkContent>
                </TextLink>
              </ExtraView>
          </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>

  );
}

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color = "red" />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>

      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {!isDate && <StyledTextInput {...props} />}

      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Signup;
