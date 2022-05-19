import Logo from './logo';
import UserIcon from './userIcon';
import NavButtons from './navButtons';
import React, {useContext} from 'react';
import MainContainer from './mainContainer';
import {HeaderContainer} from './header.styled';
import {StoreContext} from '@contexts/storeProvider';

export default function Header() {
   const {user} = useContext(StoreContext);
   return (
      <HeaderContainer>
         <MainContainer>
            <Logo />
            {user?.uid ? <UserIcon user={user} /> : <NavButtons />}
         </MainContainer>
      </HeaderContainer>
   );
}
