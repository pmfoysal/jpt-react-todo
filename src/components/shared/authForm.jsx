import React from 'react';
import RefLink from './refLink';
import {AuthFormContainer, AuthFormContent, AuthFormPara, AuthFormTitle} from './authForm.styled';

export default function AuthForm({name, children}) {
   return (
      <AuthFormContainer>
         <AuthFormTitle>{name}</AuthFormTitle>
         <AuthFormContent>
            <AuthFormPara>
               {name === 'signin' ? (
                  <React.Fragment>
                     don't have an account? <RefLink name='signup here' link='/signup' />
                  </React.Fragment>
               ) : (
                  <React.Fragment>
                     already have an account? <RefLink name='signin here' link='/signin' />
                  </React.Fragment>
               )}
            </AuthFormPara>
            {children}
         </AuthFormContent>
      </AuthFormContainer>
   );
}
