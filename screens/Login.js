import React from 'react';

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
} from './../components/styles';

const Login = () => {
  return(
    <StyledContainer>
      <InnerContainer>
        <PageLogo resizeMode = "cover" source = {require('C:\Users\nickp\App Development\FitTrack\assets\LoginRegister Backsplash.jpg')}/>
        <PageTitle> FitTrack One</PageTitle>
      </InnerContainer>
    </StyledContainer>

  );
}

export default Login;
