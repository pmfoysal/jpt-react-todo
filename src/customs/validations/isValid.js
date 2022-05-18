import {toast} from 'react-toastify';

export default function isValid(value, name) {
   if (name === 'Email') {
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!regex.test(value)) {
         toast.error('Please Provide a Valid Email!');
         return false;
      }
      return true;
   } else if (name === 'Password') {
      const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
      if (!regex.test(value)) {
         toast.error('Please Provide a Strong Password!');
         return false;
      }
      return true;
   }
   return true;
}
