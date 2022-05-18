import React from 'react';
import {ButtonContainer} from './button.styled';

export default function Button({name, handler, main}) {
   function clickHandler() {
      if (handler) handler();
      return false;
   }

   return (
      <ButtonContainer main={main} onClick={clickHandler}>
         {name}
      </ButtonContainer>
   );
}
