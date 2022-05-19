import Button from '@shared/button';
import RefLink from '@shared/refLink';
import AuthForm from '@shared/authForm';
import Checkbox from '@shared/checkbox';
import InputBox from '@shared/inputBox';
import isValid from '@validations/isValid';
import {Navigate, useLocation} from 'react-router-dom';
import MainContainer from '@shared/mainContainer';
import {StoreContext} from '@contexts/storeProvider';
import {AuthCheckGroup} from '@shared/authForm.styled';
import {SigninContainer} from '../signin/signin.styled';
import emailPassSignup from 'customs/auth/emailPassSignup';
import React, {useContext, useEffect, useState} from 'react';

export default function Signup() {
   const {user} = useContext(StoreContext);
   const location = useLocation();
   const [name, setName] = useState('');
   const [image, setImage] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [disable, setDisable] = useState(true);
   const [loading, setLoading] = useState(false);

   function inputHandler(setter) {
      return function (event) {
         setter(event.target.value);
      };
   }

   const data = {
      email,
      password,
      image,
      name,
   };

   function signupHandler() {
      const nameOk = isValid(name, 'Name');
      const imageOk = isValid(image, 'Photo');
      const emailOk = isValid(email, 'Email');
      const passOk = isValid(password, 'Password');
      if (nameOk && imageOk && emailOk && passOk) {
         setDisable(true);
         setLoading(true);
         emailPassSignup(data);
      }
   }

   useEffect(() => {
      if (name && image && email && password) {
         setDisable(false);
      } else setDisable(true);
   }, [name, image, email, password]);

   if (user?.uid) {
      const from = location?.state?.from?.pathname || '/';
      return <Navigate to={from} replace />;
   }

   return (
      <SigninContainer>
         <MainContainer>
            <AuthForm name='signup'>
               <InputBox name='your name' type='text' value={name} handler={inputHandler(setName)} />
               <InputBox name='photo url' type='text' none value={image} handler={inputHandler(setImage)} />
               <InputBox name='your email' type='email' value={email} handler={inputHandler(setEmail)} />
               <InputBox name='password' type='password' value={password} handler={inputHandler(setPassword)} />
               <AuthCheckGroup>
                  <Checkbox>
                     accept our <RefLink name='terms and conditions!' link='/terms' />
                  </Checkbox>
               </AuthCheckGroup>
               <Button name={loading ? 'loading...' : 'signup'} main disabled={disable} handler={signupHandler} />
            </AuthForm>
         </MainContainer>
      </SigninContainer>
   );
}
