import React, { useState } from 'react'
import './MessageSender.css'
import TelegramIcon from '@material-ui/icons/Telegram';
import TimerIcon from '@material-ui/icons/Timer';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicNoneIcon from '@material-ui/icons/MicNone';
import firebase from '../../../Firebase/Firebase'


export default function MessageSender() {
    
    const [inputText, setInputText]=useState('')

    const db = firebase.firestore()

    const handleChange = e=>{
        e.preventDefault();
        console.log(inputText);
        db.collection('messages').add({
            message: inputText
        })
        setInputText('')
    }
    return (
        <div className='message_sender'>
            <form   onSubmit={(e)=>handleChange(e)}>
                <div className='message'>
                    <TelegramIcon />
              
                    <div className='send_input'>
                        <input 
                        placeholder='Write Your Message Here'
                        value={inputText}
                        onChange={(e)=>setInputText(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='hidden_btn'></button>
               
               
                <TimerIcon />
                <EmojiEmotionsIcon />
                <MicNoneIcon />
                
            </div>           
            </form>
        </div>
    )
}
