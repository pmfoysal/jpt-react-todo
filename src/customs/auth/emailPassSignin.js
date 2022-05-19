import {toast} from 'react-toastify';
import auth from '@configs/firebase.config';
import {signInWithEmailAndPassword} from 'firebase/auth';

export default function emailPassSignin(email, password) {
   const toastId = toast.loading('Please Wait! Connecting to The Server...');
   signInWithEmailAndPassword(auth, email, password)
      .then(result => {
         if (result.user?.uid) {
            toast.update(toastId, {
               render: 'You have successfully signed in!',
               type: 'success',
               isLoading: false,
               autoClose: 3000,
            });
         }
      })
      .catch(error => {
         toast.update(toastId, {
            render: error.message,
            type: 'error',
            isLoading: false,
            autoClose: 3000,
         });
      });
}
