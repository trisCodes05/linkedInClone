import React,{forwardRef} from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar'
import InputOption from './InputOption'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef(({ name, description, message , photoUrl },ref) => {
  return (
    <div ref={ref} className='post'>
        <div className='post__header'>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className='post__info'>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>
        </div>

        <div className='post__buttons'>
            <InputOption Icon={ThumbUpAltIcon} title="Like" color ="gray"/>
            <InputOption Icon={ChatIcon} title="Comment" color ="gray"/>
            <InputOption Icon={ShareOutlinedIcon} title="Share" color ="gray"/>
            <InputOption Icon={SendOutlinedIcon} title="Send" color ="gray"/>

        </div>
    </div>
   
  )
})

export default Post