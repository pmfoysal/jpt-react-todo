import React from 'react';
import Logo from './logo';
import MainContainer from './mainContainer';
import {HeaderContainer} from './header.styled';
import NavButtons from './navButtons';

export default function Header() {
   return (
      <HeaderContainer>
         <MainContainer>
            <Logo />
            <NavButtons />
         </MainContainer>
      </HeaderContainer>
   );
}
