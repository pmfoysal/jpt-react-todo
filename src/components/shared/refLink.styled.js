import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const RefLinkContainer = styled(Link)`
   font-size: inherit;
   color: ${({theme}) => theme.back.accent};
   user-select: none;
   text-transform: capitalize;
   font-weight: 550;
   display: inline-block;
`;
