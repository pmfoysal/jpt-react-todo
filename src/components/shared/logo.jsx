import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {LogoContainer} from './logo.styled';

export default function Logo() {
   const {pathname} = useLocation();
   const navigate = useNavigate();

   function clickHandler() {
      if (pathname !== '/') navigate('/');
   }

   return (
      <LogoContainer onClick={clickHandler}>
         todo<span>app</span>
      </LogoContainer>
   );
}
