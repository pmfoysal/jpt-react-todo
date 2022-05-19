import Button from '@shared/button';
import React, {useContext, useEffect, useState} from 'react';
import RefLink from '@shared/refLink';
import AuthForm from '@shared/authForm';
import Checkbox from '@shared/checkbox';
import InputBox from '@shared/inputBox';
import {SigninContainer} from './signin.styled';
import MainContainer from '@shared/mainContainer';
import {AuthCheckGroup} from '@shared/authForm.styled';
import {StoreContext} from '@contexts/storeProvider';
import {Navigate, useLocation} from 'react-router-dom';
import emailPassSignin from 'customs/auth/emailPassSignin';

export default function Signin() {
   const {user} = useContext(StoreContext);
   const location = useLocation();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [disable, setDisable] = useState(true);
   const [loading, setLoading] = useState(false);

   function inputHandler(setter) {
      return function (event) {
         setter(event.target.value);
      };
   }

   function signinHandler() {
      setDisable(true);
      setLoading(true);
      emailPassSignin(email, password);
   }

   useEffect(() => {
      if (email && password) setDisable(false);
      else setDisable(true);
   }, [email, password]);

   if (user?.uid) {
      const from = location?.state?.from?.pathname || '/';
      return <Navigate to={from} replace />;
   }

   return (
      <SigninContainer>
         <MainContainer>
            <AuthForm name='signin'>
               <InputBox name='your email' type='email' value={email} handler={inputHandler(setEmail)} />
               <InputBox name='password' type='password' value={password} handler={inputHandler(setPassword)} />
               <AuthCheckGroup>
                  <Checkbox>remember me!</Checkbox>
                  <RefLink name='forget password?' link='/forget' />
               </AuthCheckGroup>
               <Button name={loading ? 'loading...' : 'signin'} main disabled={disable} handler={signinHandler} />
            </AuthForm>
         </MainContainer>
      </SigninContainer>
   );
}
