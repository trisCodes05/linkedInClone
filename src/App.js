import React, { useEffect } from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser, login } from './features/userSlice';
import Login from './Login';
import {auth} from './firebase'
import Widgests from './Widgests';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        //logged in 
        dispatch(
          login({
            email : userAuth.email,
            uid:userAuth.uid,
            displayName : userAuth.displayName,
            photoUrl: userAuth.photoURL,
        }))
      }
      else{
        //user logged out
        dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app">
      <Header/>
      {/* App Body */}
      {!user  ? (<Login />) : (
      <div className='app__body'>
        <Sidebar />
        <Feed />
         <Widgests/>
      </div>
      )}
    </div>
  );
}

export default App;
