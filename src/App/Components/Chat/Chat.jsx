import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import MessageHeader from './MessageHeader/MessageHeader'
import MessageSender from './MessageSender/MessageSender'
import firebase from '../../Firebase/Firebase'
import {useParams} from 'react-router-dom'
import './StyleChat.css'
export default function Chat() {
    const {channelId} = useParams()

    const [inputText, setInputText]=useState('')

    const db = firebase.firestore()

    const handleChange = e=>{
        e.preventDefault();
        console.log(inputText);
        if (channelId){
            db.collection('channels').doc(channelId).collection('massages').add({
                message: inputText
            })
            setInputText('')
        }
      
    }
    
    return (
        <div className='chat'>
            <MessageHeader />
            <div className='message_body '>
                    <Avatar />
                    <div className='message_container'>
                        <p className='messages '>Hello Guys</p>
                        <p className='time_stamp '>time</p>
                    </div>
                </div>
                {/* <div className='message_body message_body_receiver'>
                    <Avatar />
                    <div className='message_container'>
                        <p className='messages message_receiver'>Hello Guys</p>
                        <p className='time_stamp time_stamp_receiver'>time</p>
                    </div>
                </div> */}
            <MessageSender 
            inputText={inputText} 
            handleChange={handleChange} 
            setInputText={setInputText}/> 
        </div>
    )
}


