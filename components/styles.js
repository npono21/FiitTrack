import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity, RecyclerViewBackedScrollViewComponent, EdgeInsetsPropType} from 'react-native';

// colors
export const Colors = {
  primary: "#ffffff",
  secondary:"#E5E7EB",
  tertiary:"#1F2937",
  darkLight:"#9CA3AF",
  brand:"#6D28D9",
  green:"#10B981",
  red: red,
  
};

const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

export const BackgroundImage = styled.Image`
  height: 100%;
  width: 100%;
`;

export const StyledContainer = styled.View`
  flex: 1;
`;

export const InnerContainer = styled.View`
  height: 100%;
  padding: 25px;
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  top: 15px;
  width: 200px;
  height: 200px;
`;

export const PageTitle = styled.Text`
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  color: red;
  margin-top: 100px;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
  letter-spacing: 0.5px;
  font-weight: bold;
  color: ${primary};
  margin-top: 100px;
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: red;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;

  ${(props) => props.google == true && `
    background-color: ${green};
    flex-direction: row;
    justify-content: center;
  `}
`;

export const ButtonText = styled.Text`
  color = ${primary};
  font-size: 16px;
  align-items: center;

  ${(props) => props.google == true && `
    padding: 25px;
  `}
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width = 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 100px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${primary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

`;

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;

`;