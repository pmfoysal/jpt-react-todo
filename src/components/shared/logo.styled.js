import styled from 'styled-components';

export const LogoContainer = styled.h1`
   &,
   * {
      text-transform: capitalize;
      font-size: 4.6rem;
      line-height: 1;
      font-weight: 700;
      color: ${({theme}) => theme.text.main.head};
      user-select: none;
      cursor: pointer;
   }

   span {
      color: ${({theme}) => theme.back.accent};
   }

   &:hover {
      opacity: 0.85;
   }
`;
