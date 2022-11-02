import React from 'react'
import './Sidebar.css'
import Avatar from '@mui/material/Avatar'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
        <img 
        src="https://unblast.com/wp-content/uploads/2021/01/Space-Background-Images.jpg"
        alt=""/>
        <Avatar className="sidebar__avatar" 
        src={user.photoUrl}>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
        </div>
        

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>who viewed you</p>
                <p className='sidebar__statNumber'>2,543</p>
            </div>
            <div className='sidebar__stat'>
                <p>who viewed you</p>
                <p className='sidebar__statNumber'>2,445</p>
            </div>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('redux')}
            {recentItem('HTML')}
            {recentItem('CSS')}
            {recentItem('JavaScript')}
            {recentItem('firebase')}
        </div>


    </div>
  )
}

export default Sidebar