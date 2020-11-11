import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import MessageHeader from './MessageHeader/MessageHeader'
import MessageSender from './MessageSender/MessageSender'
import firebase from '../../Firebase/Firebase'
import {useParams} from 'react-router-dom'
import './StyleChat.css'
export default function Chat() {
    const {channelId} = useParams()
    const [channel, setChannel] = useState([])

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
    useEffect(()=>{
        const unsubscribe = db.collection('channels').onSnapshot(snapshot => 
          setChannel(
                 snapshot.docs.map(doc =>({
                 id: doc.id,
                 data: doc.data()
             })
         )
     ))
     return () =>{
         unsubscribe()
     }
         // 
     },[db,channel, ])
    
        
    
    return (
        <div className='chat'>
            <MessageHeader  />
            <div className='message_body '>
                    <Avatar />
                    <div className='message_container'>
                        <p className='messages '>Hello Guys</p>
                        <p className='time_stamp '>time</p>
                    </div>
                </div>
                
            <MessageSender 
            inputText={inputText} 
            handleChange={handleChange} 
            setInputText={setInputText}/> 
        </div>
    )
}


