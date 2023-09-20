import React, { useContext, useState } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import {FirebaseContext} from '../../store/firebaseContext'
import {useNavigate} from 'react-router-dom'

function Login() {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const {firebase} = useContext(FirebaseContext)

   const navigate = useNavigate()

  
   const handleLogin =(event)=>{
    event.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>{ setPassword(e.target.value)}}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
