import React, {useState} from 'react'
import './Login.css'
import {auth } from './firebase';
import { createUserWithEmailAndPassword , 
        updateProfile,
        signInWithEmailAndPassword
} from "firebase/auth";
import { useDispatch } from 'react-redux';
import {login} from './features/userSlice';
import logo from './images/linkedin-logo-transparent.png';


function Login() {
    const [email,setEmail ] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [profPic ,setProfile] = useState("");
    const dispatch = useDispatch();

    const LoginToApp = (e) => {
        e.preventDefault(); 
        signInWithEmailAndPassword(auth, email, password)
        .then((userAuth) =>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName :  userAuth.user.displayName,
                photoUrl : userAuth.user.photoURL,
            }))
        })
        .catch((error) => {
            alert(error);
        })
    };
    const register = () => {
        if(!name){
            return alert('Please enter a fulll name');
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then( (userAuth) =>{
           updateProfile( userAuth.user,{
                displayName : name,
                photoUrl :profPic,
            })
           .then(()=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName : name,
                photoUrl : profPic,
            }))
           })
        })
        .catch((err) =>{
            alert(err.message)
        })
        
    };
  return (
    <div className='login'>
        <img src={logo} alt="logo" />
    <form>
        <input placeholder='Full name required if registering' 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input placeholder='Profile pic URL (optional)'
         type='text'
         value={profPic}
         onChange={(e)=>setProfile(e.target.value)}
         />
        <input placeholder='Email' 
        type='email' 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        />

        <input placeholder='Password' 
        type='password' 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}/>
        <button type='submit' onClick={LoginToApp}>Sign In</button>
    </form>
    <p>Not a member?
        <span className='login_register' onClick={register}> Register Now</span>
    </p>
    
    </div>
  )
}

export default Login