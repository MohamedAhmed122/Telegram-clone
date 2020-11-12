import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import MessageHeader from './MessageHeader/MessageHeader'
import MessageSender from './MessageSender/MessageSender'
import firebase from '../../Firebase/Firebase'
import {useParams} from 'react-router-dom'
import Loading from '../../Components/Loading/Loading'
import './StyleChat.css'
import { useSelector } from 'react-redux'

export default function Chat() {
    const {channelId} = useParams()
    const {currentUser } = useSelector(state => state.auth)
    const [channel, setChannel] = useState([])
    const [massages,setMassages] = useState([])
    const [inputText, setInputText]=useState('')

    const db = firebase.firestore()

    const handleChange = e=>{
        e.preventDefault();
        console.log(inputText);
        if (channelId){
            db.collection('channels').doc(channelId).collection('massages').add({
                massages: inputText,
                timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                displayName: currentUser.displayName,
                userPhotoURL: currentUser.photoURL

            })
            setInputText('')
        }
      
    }
    useEffect(()=>{
        if (channelId){
            db.collection('channels').onSnapshot(snapshot => 
                setChannel(
                       snapshot.docs.map(doc =>({
                       id: doc.id,
                       data: doc.data()
                   })
               )
           ))
        }
      
    
         // 
     },[db,channel,channelId ])
    
    useEffect(()=>{
        if (channelId){
            db.collection('channels').doc(channelId).collection('massages')
            .orderBy('timeStamp','asc')
            .onSnapshot(snapshot=>{
                 setMassages(snapshot.docs.map(doc=> doc.data()))
             })
      
        }
       
        
    },[channelId, db, setMassages])
 

    console.log(massages);
    return (
        <div className='chat'> 
            <MessageHeader massages={massages} />
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
                
            <MessageSender 
            inputText={inputText} 
            handleChange={handleChange} 
            setInputText={setInputText}/> 
        </div>
    )
}


