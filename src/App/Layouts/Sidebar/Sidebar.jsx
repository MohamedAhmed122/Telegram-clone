import React, { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import BorderColorIcon from '@material-ui/icons/BorderColor';

import './StyleSidebar.css'
import { IconButton } from '@material-ui/core';
import SidebarRow from './SidebarRow/SidebarRow';
import SidebarBottom from './SidebarBottom/SidebarBottom';
import firebase from '../../Firebase/Firebase'


export default function Sidebar() {

    const [channel,setChannel] = useState([])
    // const {channelId}  = useSelector(state => state.chat)
    // const dispatch = useDispatch();
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
        <div className='sidebar'>
            <div className='sidebar_header'>
                <div className='search'>
                    <SearchIcon />
                    <input type='text' placeholder='Search for channels or users' />
                </div>
                <IconButton onClick={handleAddNewChannel}>
                    <BorderColorIcon  />
                </IconButton>
            </div>
            {
                channel.map(channel =>(
                    <SidebarRow key={channel.id} id={channel.id} channelName={channel.data.channelName} src={img}/> 
                ))

            }
            
            <SidebarBottom />
        </div>
    )
}
const img = 'https://pagesix.com/wp-content/uploads/sites/3/2020/03/bebe-rexha-30.jpg?quality=80&strip=all'