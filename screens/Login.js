import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { TextInput, View } from 'react-native';
import {Octicons} from '@expo/vector-icons';


import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  Colors,
} from './../components/styles';
import { darkblue } from 'color-name';
import { red } from 'ansi-colors';

//Color Structuring
const {brand, darkLight} = Colors;

const Login = () => {
  return(
    <StyledContainer>
      <StatusBar style = "dark" />
      <InnerContainer>
        <PageLogo resizeMode = "cover" source = {require('../assets/loginscreen.jpg')}/>
        <PageTitle>FitTrack</PageTitle>
        <SubTitle>Account Login</SubTitle>

        <Formik
          initialValues = {{email: '', password: ''}}
          onSubmit = {(values) => {
            console.log(values);
          }}
        > 
          {({handleChange, handleBlur, handleSubmit, values}) => (
          <StyledFormArea>
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
          </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>

  );
}

const MyTextInput = ({label, icon, ...props}) => {
  return (
  <View>
    <LeftIcon>
      <Octicons name = {icon}  size = {30} color = "red" />
    </LeftIcon>
    <StyledInputLabel> {label} </StyledInputLabel>
    <StyledTextInput {...props} />
  </View>)
};

export default Login;
