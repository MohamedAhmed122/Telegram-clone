import { Avatar } from '@material-ui/core'
import React from 'react'
import MessageHeader from './MessageHeader/MessageHeader'
import MessageSender from './MessageSender/MessageSender'
import './StyleChat.css'
export default function Chat() {
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
            <MessageSender /> 
        </div>
    )
}


