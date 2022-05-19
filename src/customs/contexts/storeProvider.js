import useUser from '@hooks/useUser';
import React, {createContext, useState} from 'react';

export const StoreContext = createContext();

export default function StoreProvider({children}) {
   const [store, setStore] = useState({});
   const user = useUser();

   return <StoreContext.Provider value={{...store, user, setStore}}>{children}</StoreContext.Provider>;
}
