import React from 'react';
import {CheckboxContainer} from './checkbox.styled';

export default function Checkbox({children}) {
   return (
      <CheckboxContainer>
         <input type='checkbox' required />
         <p>{children}</p>
      </CheckboxContainer>
   );
}
