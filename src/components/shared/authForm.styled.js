import styled from 'styled-components';

export const AuthFormContainer = styled.div`
   border-radius: 2rem;
   overflow: hidden;
   background-color: ${({theme}) => theme.back.card1};
   width: 45rem;
`;

export const AuthFormContent = styled.div`
   padding: 4rem;
   display: flex;
   flex-direction: column;
   gap: 2rem;
`;

export const AuthFormTitle = styled.h1`
   padding: 2rem;
   line-height: 1;
   text-transform: capitalize;
   font-weight: 700;
   font-size: 3rem;
   color: ${({theme}) => theme.text.main.head};
   background-color: ${({theme}) => theme.back.card2};
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const AuthInputGroup = styled.span`
   display: grid;
   grid-template-columns: repeat(1fr, 1fr);
   gap: 2rem;
`;

export const AuthCheckGroup = styled.span`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 1rem;
   font-size: 1.4rem;
`;
