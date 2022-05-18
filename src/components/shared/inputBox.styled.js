import styled, {css} from 'styled-components';

export const InputBoxContainer = styled.div`
   width: 100%;
`;

export const InputBoxInput = styled.input`
   height: 4.6rem;
   width: 100%;
   border-radius: 0.75rem;
   border: 0.2rem solid rgba(0, 0, 0, 0.25);
   background-color: transparent;
   padding: 0 1.5rem;
   font-weight: 700;
   transition: 0.2s ease;
   color: ${({theme}) => theme.text.main.head};

   &[data-on='true'] {
      background-color: ${({theme}) => theme.back.page};

      & + p {
         top: 0.1rem;
         opacity: 1;
      }
   }

   &:focus {
      border-color: ${({theme}) => theme.back.accent};
      background-color: ${({theme}) => theme.back.page};

      & + p {
         color: ${({theme}) => theme.text.sub.para};
         background-color: ${({theme}) => theme.back.accent};
      }
   }

   ${({none}) =>
      none
         ? css`
              text-transform: none;
           `
         : null}
`;

export const InputBoxName = styled.p`
   position: absolute;
   pointer-events: none;
   text-transform: capitalize;
   transition: 0.2s ease;
   top: 50%;
   right: 2rem;
   transform: translateY(-50%);
   font-size: 1.2rem;
   font-weight: 550;
   color: ${({theme}) => theme.text.sub.para};
   background-color: ${({theme}) => theme.text.main.para};
   padding: 0.35rem 0.8rem 0.45rem;
   border-radius: 1rem;
   line-height: 1;
   opacity: 0;
`;
