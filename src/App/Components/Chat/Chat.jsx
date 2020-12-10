import React, { useEffect, useState } from 'react'
import MessageHeader from './MessageHeader/MessageHeader'
import MessageSender from './MessageSender/MessageSender'
import firebase from '../../Firebase/Firebase'
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Message from './Message/Message'

export default function Chat() {
    const {channelId} = useParams()
    const {currentUser } = useSelector(state => state.auth)
    const [channel, setChannel] = useState([])
    const [massages,setMassages] = useState([])
    const [inputText, setInputText]=useState('')

    const db = firebase.firestore()

    // handle Submit to handle the input and take the message and send it to the firebase
    const handleSubmit= e=>{
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
    // get the all channel names
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
    
     // get all massages from the db
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
        <div style={{flex: '0.7'}}> 
            <MessageHeader massages={massages} />
            <Message currentUser={currentUser} massages={massages}/>
                
            <MessageSender 
            inputText={inputText} 
            handleChange={handleSubmit} 
            setInputText={setInputText}/> 
        </div>
    )
}


