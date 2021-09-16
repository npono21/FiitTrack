import React, { useState } from "react";
import { MeasurementsButton, StyledContainer } from "../components/styles";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from "react-native-fontawesome";

//prettier-ignore
const Workouts = () => {
  return (
    <StyledContainer>
      <MeasurementsButton>
        <FontAwesome icon={SolidIcons.smile}/>
      </MeasurementsButton>
    </StyledContainer>
  );
};

export default Workouts;
