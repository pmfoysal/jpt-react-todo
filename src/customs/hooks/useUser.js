import {useEffect, useState} from 'react';
import auth from '@configs/firebase.config';
import {onAuthStateChanged} from 'firebase/auth';

export default function useUser() {
   const [user, setUser] = useState({});

   useEffect(() => {
      onAuthStateChanged(auth, user => {
         if (user) {
            setUser(user);
         } else {
            setUser({});
         }
      });
   }, []);

   return user;
}
