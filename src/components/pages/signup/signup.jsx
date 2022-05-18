import Button from '@shared/button';
import React, {useEffect, useState} from 'react';
import RefLink from '@shared/refLink';
import AuthForm from '@shared/authForm';
import Checkbox from '@shared/checkbox';
import InputBox from '@shared/inputBox';
import MainContainer from '@shared/mainContainer';
import {AuthCheckGroup} from '@shared/authForm.styled';
import {SigninContainer} from '../signin/signin.styled';

export default function Signup() {
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

   function signupHandler() {
      setDisable(true);
      setLoading(true);
   }

   useEffect(() => {
      if (email && password) setDisable(false);
      else setDisable(true);
   }, [email, password]);

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
