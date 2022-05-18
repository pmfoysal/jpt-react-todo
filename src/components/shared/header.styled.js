import styled from 'styled-components';

export const HeaderContainer = styled.header`
   padding: 2.5rem 0;
   background-color: ${({theme}) => theme.back.card1};

   & > * {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
   }
`;
