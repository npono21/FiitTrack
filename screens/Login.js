import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { TextInput, View } from 'react-native';
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
} from './../components/styles';
import { darkblue } from 'color-name';
import { red } from 'ansi-colors';

//Color Structuring
const {brand, darkLight, primary} = Colors;

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

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
              <Line />
              <StyledButton google = {true} onPress = {handleSubmit}>
                <Fontisto name = 'google' color = {primary} size = {25} />
                <ButtonText google = {true} >Sign in with Google</ButtonText>
              </StyledButton>
          </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>

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
