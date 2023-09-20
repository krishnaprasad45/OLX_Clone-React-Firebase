import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD1Jl6bUcy4cpiJ_zSQZ-kHNLcLdxsSDAQ",
  authDomain: "olx-clone2-43c0c.firebaseapp.com",
  projectId: "olx-clone2-43c0c",
  storageBucket: "olx-clone2-43c0c.appspot.com",
  messagingSenderId: "920781864052",
  appId: "1:920781864052:web:81da5b5c26a2f417e96521"
  };
  
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig)
   