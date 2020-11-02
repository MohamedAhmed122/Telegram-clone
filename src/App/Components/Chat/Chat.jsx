import React from 'react'
import Header from '../../Layouts/Header/Header'
import MessageSender from './MessageSender/MessageSender'
import './StyleChat.css'
export default function Chat() {
    return (
        <div className='chat'>
            <Header />
            <MessageSender />
        </div>
    )
}
