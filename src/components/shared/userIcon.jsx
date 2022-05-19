import Button from './button';
import React, {useState} from 'react';
import userImg from '@images/user.svg';
import userSignout from 'customs/auth/userSignout';
import {UserIconContainer, UserIconImage, UserIconName, UserIconWindow} from './userIcon.styled';

export default function UserIcon({user}) {
   const [active, setActive] = useState(false);

   function signoutHandler() {
      setActive(false);
      userSignout();
   }

   function clickHandler() {
      setActive(!active);
   }

   return (
      <UserIconContainer>
         <UserIconName>{user?.displayName || 'unknown'}</UserIconName>
         <UserIconImage src={user?.photoURL || userImg} alt='user' onClick={clickHandler} />
         {active && (
            <UserIconWindow>
               <UserIconImage large src={user?.photoURL || userImg} alt='user' />
               <UserIconName large>{user?.displayName || 'unknown'}</UserIconName>
               <Button main name='signout' handler={signoutHandler} />
            </UserIconWindow>
         )}
      </UserIconContainer>
   );
}
