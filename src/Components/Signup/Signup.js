import React, { useState, useContext } from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/firebaseContext';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const { firebase } = useContext(FirebaseContext)
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      console.log("result", result)
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('userslist').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          navigate('/login')
        }).catch((error)=>{
          alert(error.message)
        })
      }).catch((error)=>{
        alert(error.message)
      })
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" alt='logo' src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username}
            onChange={(e) => { setUsername(e.target.value) }}
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={(e) => { setPhone(e.target.value) }}
            defaultValue="Doe"
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
            onChange={(e) => { setPassword(e.target.value) }}
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
