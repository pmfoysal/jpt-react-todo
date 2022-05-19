import {Home, Signin, Signup} from '@pages';
import React, {Suspense} from 'react';
import Toaster from '@helpers/toaster';
import {Route, Routes} from 'react-router-dom';
import Header from '@shared/header';
import RequireAuth from '@helpers/requireAuth';

export default function App() {
   // function getFactorial(num) {
   //    if (num === 0 || num === 1) return 1;
   //    return num * getFactorial(Math.abs(num) - 1);
   // }

   // ======================================================

   // var arr = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];

   // function getMaxValue(array) {
   //    const newArray = array.toString().split(',').map(Number);
   //    return Math.max(...newArray);
   // }

   // ======================================================

   // const arr = ['1', '5', '9', '14', '5', '22', '48', '25', '22', '20', '9', '13'];

   // function getDuplicates(array) {
   //    var obj = {};
   //    for (var i = 1; i < array.length; i++) {
   //       obj[array[i]] = (obj[array[i]] || 0) + 1;
   //    }
   //    return obj;
   // }

   // ======================================================

   // const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8];

   // function getUniques(array) {
   //    var newArray = [];
   //    for (var i = 0; i < array.length; i++) {
   //       if (!newArray.includes(array[i])) {
   //          newArray.push(array[i]);
   //       }
   //    }
   //    newArray.sort(function (a, b) {
   //       if (a > b) return 1;
   //       else if (a < b) return -1;
   //       return 0;
   //    });
   //    return newArray;
   // }

   // console.log(getUniques(arr));

   return (
      <React.Fragment>
         <Header />
         <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
               <Route
                  path='/'
                  element={
                     <RequireAuth>
                        <Home />
                     </RequireAuth>
                  }
               />
               <Route path='/signin' element={<Signin />} />
               <Route path='/signup' element={<Signup />} />
            </Routes>
         </Suspense>
         <Toaster />
      </React.Fragment>
   );
}
