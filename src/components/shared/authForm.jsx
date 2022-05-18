import React from 'react';
import {AuthFormContainer, AuthFormContent, AuthFormTitle} from './authForm.styled';

export default function AuthForm({name, children}) {
   return (
      <AuthFormContainer>
         <AuthFormTitle>{name}</AuthFormTitle>
         <AuthFormContent>{children}</AuthFormContent>
      </AuthFormContainer>
   );
}
