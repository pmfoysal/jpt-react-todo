import React, {useContext} from 'react';
import {StoreContext} from '@contexts/storeProvider';
import {Navigate, useLocation} from 'react-router-dom';

export default function RequireAuth({children}) {
   const {user} = useContext(StoreContext);
   const location = useLocation();

   if (!user?.uid) {
      return <Navigate to='/signin' state={{from: location}} />;
   }

   return children;
}
