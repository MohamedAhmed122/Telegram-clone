import { Avatar } from '@material-ui/core'
import React from 'react'
import './StyleMessage.css'
// import {format} from 'date-fns'
// import { convertTimeStamp } from '../../Utils/Utils'

export default function Message({massages,currentUser }) {
    // console.log(massages)
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
                        {/* <p className='time_stamp '>date</p> */}
                    </div>
                </div>
                ))
            }
        </div>
    )
}
