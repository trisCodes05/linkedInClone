import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { collection  ,addDoc ,serverTimestamp, orderBy, onSnapshot, where, query} from "firebase/firestore";
import {db} from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';



function Feed() {
    const user = useSelector(selectUser);
    const [input ,setInput] = useState('');
   
    const [posts , setPosts] = useState([]);

   
    const colRef = collection(db, 'posts');
  
  
   
        // getDocs(colRef)
        // .then((snapshot) => 
        //     setPosts(
        //         snapshot.docs.map((doc) => ({
        //             id: doc.id,
        //             data:doc.data(),
        //         }))
        //     )
        //     )
      
   const ordered = query(colRef, orderBy('timestamp', 'desc'))
    useEffect(() => {
    onSnapshot(ordered , (snapshot) => {
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data:doc.data(),
            }))
        )
           
    })
}, []);

    const sendPost = (e) => {
        e.preventDefault();
        addDoc(colRef, {
            name : user.displayName,
            description:user.email,
            message : input,
            photoUrl : user.photoUrl || " ",
            timestamp : serverTimestamp(),
        })
        setInput("");
        // .then(() => {
            
        // })
    };
  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input 
                    value={input}
                    onChange ={(e) => setInput(e.target.value)}
                    type="text"/>

                    <button 
                    onClick={sendPost}
                    type="submit">Send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption title="Photo" Icon={ImageIcon} color="#7085F9"/>
                <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E"/>
                <InputOption title="Event" Icon={EventNoteIcon} color="#COCBCD"/>
                <InputOption title="Write article" Icon={CalendarViewDayIcon} color="#7FC15E"/>
            </div>
        </div>
        <FlipMove>
    {posts.map(({id, data:{name, description ,message, photoUrl } }) =>(
        <Post 
        key = {id}
        name = {name}
        description = {description}
        message = {message}
        photoUrl = {photoUrl}
        />
    ))}</FlipMove>
    </div>
  )
}

export default Feed