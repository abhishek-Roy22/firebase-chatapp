import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyChH4s5sIKjsm2ITzXldiqA_rAXX7eyo70',
  authDomain: 'fir-chatapp-b9658.firebaseapp.com',
  projectId: 'fir-chatapp-b9658',
  storageBucket: 'fir-chatapp-b9658.appspot.com',
  messagingSenderId: '647762585919',
  appId: '1:647762585919:web:941d85447dfc4578f94b8a',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
