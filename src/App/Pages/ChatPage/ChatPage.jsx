
import React, { useEffect, useState } from 'react'
import Chat from '../../Components/Chat/Chat'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import { Switch,  Route} from "react-router-dom";
import firebase from '../../Firebase/Firebase'
import './StyleChatPage.css'

export default function ChatPage() {
    const [channel,setChannel] = useState([])
    const db = firebase.firestore();

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
   
       
    
  
    const handleAddNewChannel =() =>{
       const newChannel = prompt('Enter a Channel Name');
       if(newChannel){
        db.collection('channels').add({
            channelName: newChannel
        })
       }
       
    }
    return (
        <div className='chat_page'>
            <>
                <Sidebar channel={channel} handleAddNewChannel={handleAddNewChannel}/>
                <Switch>
                    <Route  path='/channel/:channelId'>
                        <Chat/>
                    </Route>
                </Switch>
            </>
           
           
           
        </div>
    )
}
