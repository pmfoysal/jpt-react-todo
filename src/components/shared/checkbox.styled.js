import styled from 'styled-components';

export const CheckboxContainer = styled.label`
   display: flex;
   align-items: center;
   gap: 0.5rem;
   cursor: pointer;
   font-size: inherit;

   p {
      color: ${({theme}) => theme.text.main.para};
      font-size: inherit;
      font-weight: 550;
      text-transform: capitalize;
      user-select: none;
   }
`;
