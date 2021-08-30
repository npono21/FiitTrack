import styled from 'styled-components';
import {View, Text, Image} from 'react-native';

// colors
export const Colors = {
  primary: "#ffffff",
  secondary:"#E5E7EB",
  tertiary:"#1F2937",
  darkLight:"#9CA3AF",
  brand:"#6D28D9",
  green:"#10B981",
  red:"#EF4444",
};

const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

export const StyledContainer = styled.View`
  felx: 1;
  padding: 25px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 250 px;
  height: 200 px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-allign: center;
  font-weight: bold;
  color: ${brand};
  pading: 10px;
`;
