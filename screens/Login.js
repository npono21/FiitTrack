import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { ImageBackground, TextInput, View, StyleSheet } from 'react-native';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';


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
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
  BackgroundImage
} from './../components/styles';
import { darkblue } from 'color-name';
import { red } from 'ansi-colors';

//Color Structuring
const {brand, darkLight, primary} = Colors;

//Keyboard avoiding wrapper.
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
import styled from 'styled-components';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center"
  }
});

const Login = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return(
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <ImageBackground resizeMode="cover" source={require('../assets/loginscreen.jpg')} 
          style={styles.image}>      
        <StatusBar style = "dark" />
      <InnerContainer>
        {/* <PageLogo resizeMode = "cover" source = {require('../assets/loginscreen.jpg')}/> */}
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
              <MsgBox>...</MsgBox>
              <StyledButton onPress = {handleSubmit}>
                <ButtonText>Login</ButtonText>
              </StyledButton>
              <Line/>
              <StyledButton google = {true} onPress = {handleSubmit}>
                <Fontisto name = 'google' color = {primary} size = {25} />
                <ButtonText google = {true} >Sign in with Google</ButtonText>
              </StyledButton>
              <ExtraView>
                <ExtraText>Don't have an account already? </ExtraText>
                <TextLink onPress = {() => navigation.navigate('Signup')}>
                  <TextLinkContent>Signup</TextLinkContent>
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
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
  return (
  <View>
    <LeftIcon>
      <Octicons name = {icon}  size = {30} color = "red" />
    </LeftIcon>
    <StyledInputLabel> {label} </StyledInputLabel>
    <StyledTextInput {...props} />
    {isPassword && (
      <RightIcon onPress = {() => setHidePassword(!hidePassword)}>
        <Ionicons name = {hidePassword ? 'md-eye-off' : 'md-eye'} size = {30} color = "red"/>
      </RightIcon>
    )}
  </View>)
};

export default Login;
