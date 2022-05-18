import {toast} from 'react-toastify';
import auth from '@configs/firebase.config';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';

export default function emailPassSignup(data) {
   const {email, password, name, image} = data;
   const toastId = toast.loading('Please Wait! Connecting to The Server!');
   createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
         if (result.user?.uid) {
            toast.update(toastId, {
               render: 'Account Created! Now Updating Profile...',
            });
            updateUserProfile(name, image, toastId);
         }
      })
      .catch(error => {
         toast.update(toastId, {
            render: error.message,
            type: 'error',
            isLoading: false,
         });
      });
}

function updateUserProfile(name, image, toastId) {
   updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
   })
      .then(() => {
         toast.update(toastId, {
            render: 'Profile Updated! Now Getting Access Token...',
            type: 'success',
            isLoading: false,
            autoClose: 3000,
         });
      })
      .catch(error => {
         toast.update(toastId, {
            render: error.message,
            type: 'error',
            isLoading: false,
         });
      });
}
