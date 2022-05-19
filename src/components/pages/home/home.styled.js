import {Icon} from '@iconify/react';
import styled from 'styled-components';

export const HomeContainer = styled.section`
   padding: 8rem 0;

   & > * {
      display: flex;
      align-items: center;
      justify-content: center;
   }
`;

export const HomeContent = styled.div`
   width: 60rem;
   border-radius: 2.5rem;
   overflow: hidden;
   background-color: ${({theme}) => theme.back.card1};
`;

export const TodoHeadArea = styled.div`
   padding: 2rem 3rem;
   background-color: ${({theme}) => theme.back.card2};
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const TodoHeadIcon = styled(Icon)`
   height: 4rem;
   width: 4rem;
   cursor: pointer;
   color: ${({theme}) => theme.text.main.para};
`;

export const TodoHeadTexts = styled.span`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

export const TodoHeadTitle = styled.h1`
   font-size: 3rem;
   line-height: 1;
   color: ${({theme}) => theme.text.main.head};
`;

export const TodoHeadPara = styled.p`
   font-size: 1.8rem;
   line-height: 1;
   font-weight: 550;
   margin-top: 1.5rem;
   color: ${({theme}) => theme.text.main.para};
`;

export const TodoListArea = styled.div`
   padding: 3rem;
`;
