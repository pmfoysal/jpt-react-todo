import React from 'react';
import Button from './button';
import {useLocation, useNavigate} from 'react-router-dom';
import {NavButtonsContainer} from './navButtons.styled';

export default function NavButtons() {
   const navigate = useNavigate();
   const {pathname} = useLocation();

   function signinHandler() {
      if (pathname !== '/signin') navigate('/signin');
   }

   function signupHandler() {
      if (pathname !== '/signup') navigate('/signup');
   }

   return (
      <NavButtonsContainer>
         <Button name='signin' handler={signinHandler} />
         <Button name='signup' main handler={signupHandler} />
      </NavButtonsContainer>
   );
}
