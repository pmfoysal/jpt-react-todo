import styled, {css} from 'styled-components';

export const ButtonContainer = styled.button`
   height: 4.5rem;
   padding: 0 3rem;
   display: flex;
   align-items: center;
   justify-content: center;
   text-transform: capitalize;
   font-size: 1.5rem;
   font-weight: 550;
   line-height: 1;
   user-select: none;
   border: 0.2rem solid ${({theme}) => theme.back.accent};
   border-radius: 10rem;
   color: ${({theme}) => theme.text.main.head};
   transition: 0.1s ease;

   ${({theme, main}) =>
      main
         ? css`
              color: ${theme.text.sub.head};
              background-color: ${theme.back.accent};
           `
         : null}

   &:hover {
      background-color: ${({theme}) => theme.back.accent};
      color: ${({theme}) => theme.text.sub.head};
      opacity: 0.85;
   }

   &:active {
      transform: scale(0.95);
   }
`;
