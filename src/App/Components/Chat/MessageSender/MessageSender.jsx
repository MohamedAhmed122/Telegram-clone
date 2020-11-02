import React from 'react'
import './MessageSender.css'
import TelegramIcon from '@material-ui/icons/Telegram';
import TimerIcon from '@material-ui/icons/Timer';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicNoneIcon from '@material-ui/icons/MicNone';


export default function MessageSender() {
    return (
        <div className='message_sender'>
            <div className='message'>
                <TelegramIcon />
                <div className='send_input'>
                    <input placeholder='Write Your Message Here'/>
                </div>
                <TimerIcon />
                <EmojiEmotionsIcon />
                <MicNoneIcon />
            </div>
        </div>
    )
}
