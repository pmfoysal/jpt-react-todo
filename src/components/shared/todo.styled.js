import styled from 'styled-components';
import {css} from 'styled-components';

export const TodoContainer = styled.summary`
   width: 100%;
   display: flex;
   align-items: center;
   background-color: #fff;
   padding: 2rem;
   border-radius: 2rem;
   gap: 2rem;
   opacity: ${({done}) => (done ? 0.5 : 1)};
`;

export const TodoCount = styled.div`
   font-size: 2rem;
   font-weight: 700;
   color: ${({theme}) => theme.text.main.head};
`;

export const TodoButtons = styled.div`
   margin-left: auto;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   gap: 1rem;
   width: 10rem;
`;

export const TodoButton = styled.button`
   width: 8rem;
   height: 3rem;
   font-size: 1.4rem;
   border-radius: 10rem;
   text-transform: capitalize;
   background-color: ${({theme}) => theme.back.accent};
`;

export const TodoTexts = styled.div``;

export const TodoTitle = styled.h1`
   font-size: 1.8rem;
   ${({done}) =>
      done
         ? css`
              text-decoration: line-through;
           `
         : null}
`;

export const TodoPara = styled.p`
   font-size: 1.5rem;
   color: ${({theme}) => theme.text.main.para};
   margin-top: 0.5rem;
   ${({done}) =>
      done
         ? css`
              text-decoration: line-through;
           `
         : null}
`;
