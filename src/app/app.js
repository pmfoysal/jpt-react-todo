import {Home, Signin, Signup} from '@pages';
import React, {Suspense} from 'react';
import Toaster from '@helpers/toaster';
import {Route, Routes} from 'react-router-dom';
import Header from '@shared/header';

export default function App() {
   return (
      <React.Fragment>
         <Header />
         <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/signin' element={<Signin />} />
               <Route path='/signup' element={<Signup />} />
            </Routes>
         </Suspense>
         <Toaster />
      </React.Fragment>
   );
}
