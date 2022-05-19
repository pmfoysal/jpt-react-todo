import styled from 'styled-components';

export const UserIconContainer = styled.nav`
   display: flex;
   align-items: center;
   gap: 1.5rem;
`;

export const UserIconImage = styled.img`
   height: ${({large}) => (large ? '10rem' : '4.6rem')};
   width: ${({large}) => (large ? '10rem' : '4.6rem')};
   transform: scale(1.1);
   border-radius: 100%;
   overflow: hidden;
   transition: 0.1s ease;
   cursor: pointer;

   &:hover {
      opacity: 0.85;
   }

   &:active {
      transform: scale(1);
   }
`;

export const UserIconName = styled.h3`
   font-size: ${({large}) => (large ? '2.5rem' : '1.8rem')};
   font-weight: 550;
   color: ${({theme}) => theme.text.main.title};
`;

export const UserIconWindow = styled.div`
   position: absolute;
   top: calc(100% + 2rem);
   right: 0;
   padding: 3rem;
   width: 25rem;
   border-radius: 2rem;
   background-color: ${({theme}) => theme.back.card1};
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   z-index: 10;
   gap: 2rem;
`;
