import React, { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import BorderColorIcon from '@material-ui/icons/BorderColor';

import './StyleSidebar.css'
import { IconButton } from '@material-ui/core';
import SidebarRow from './SidebarRow/SidebarRow';
import SidebarBottom from './SidebarBottom/SidebarBottom';

import { Link, useParams } from 'react-router-dom'
import firebase from '../../Firebase/Firebase'




export default function Sidebar({handleAddNewChannel,channel}) {

    const db = firebase.firestore()
    const [messages, setMassages] = useState([])
    // const {channelId} = useParams()

    // useEffect(()=>{
    //     if (channelId){
    //         db.collection('channels').doc(channelId).collection('massages')
    //         .orderBy('timeStamp','asc')
    //         .onSnapshot(snapshot=>{
    //              setMassages(snapshot.docs.map(doc=> doc.data()))
    //          })
    //     }
       
        
    // },[channelId, db, setMassages])

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