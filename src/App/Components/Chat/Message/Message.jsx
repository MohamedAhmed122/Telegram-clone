import { Avatar } from '@material-ui/core'
import React from 'react'
import './StyleMessage.css'

export default function Message({massages,currentUser }) {
    return (
        <div className='chat'>
           { massages.map(message =>(
                <div 
                key={message.id} 
                className={`message_body ${ currentUser.displayName === message.displayName && 'message_body_receiver'} `}>
                     
                    <Avatar src={message?.userPhotoURL}/>
                    <div className={`message_container`}>
                        <p 
                        className={`messages ${ currentUser.displayName === message.displayName && 'message_receiver'} `}>
                            {message?.massages}
                            </p>
                        <p className='time_stamp '>time</p>
                    </div>
                </div>
                ))
            }
        </div>
    )
}
