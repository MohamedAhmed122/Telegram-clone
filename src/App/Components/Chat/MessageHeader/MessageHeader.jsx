import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {useParams} from 'react-router-dom'
import firebase from '../../../Firebase/Firebase'

import './StyleHeader.css'

export default function MessageHeader({massages}) {

    const [channelName, setChannelName] = useState('')
    const [seed,setSeed] = useState()
    const {channelId } = useParams()
    const db = firebase.firestore()
    useEffect(()=>{
     
        const unsubscribe = db.collection('channels').doc(channelId)
        .onSnapshot(
            snapshot => 
                (setChannelName(snapshot.data())))
  
    return () =>{
        unsubscribe()
    }
    },[db, channelId])

    useEffect(()=>{
        setSeed(Math.floor(Math.random()* 5000))
    },[channelId])
    
    const img = `https://avatars.dicebear.com/api/human/${seed}.svg`
    return ( 
        <div className='header'>
            <div className='header_main'>
                <div className='header_left'>
                    <Avatar src={img} />
                    <div className='header_info'>
                        <strong>{channelName.channelName}</strong>
                        <p>
                          Last seen at  {new Date (massages[massages.length -1]?.timeStamp?.toDate()).toUTCString()}
                        </p>
                    </div>
                </div>
                <IconButton>
                    <MoreHorizIcon />
                </IconButton> 
            </div>
            
        </div>
    )
}

