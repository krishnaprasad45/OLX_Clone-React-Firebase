import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCtq605bwQAHX22gasLKlDL_iXBRTUDwbc",
    authDomain: "olx-clone-91194.firebaseapp.com",
    projectId: "olx-clone-91194",
    storageBucket: "olx-clone-91194.appspot.com",
    messagingSenderId: "474583573975",
    appId: "1:474583573975:web:d934db2a0940fdc07e1792",
    measurementId: "G-3EK3NSRJT1"
  };
  
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig)
   