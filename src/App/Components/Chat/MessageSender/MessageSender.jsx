import React from 'react'
import './MessageSender.css'
import TelegramIcon from '@material-ui/icons/Telegram';
import TimerIcon from '@material-ui/icons/Timer';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicNoneIcon from '@material-ui/icons/MicNone';



export default function MessageSender({handleChange,setInputText, inputText}) {
    
    
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
