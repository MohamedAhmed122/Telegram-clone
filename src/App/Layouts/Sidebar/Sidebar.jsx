import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import BorderColorIcon from '@material-ui/icons/BorderColor';

import './StyleSidebar.css'
import { IconButton } from '@material-ui/core';
import SidebarRow from './SidebarRow/SidebarRow';
import SidebarBottom from './SidebarBottom/SidebarBottom';


export default function Sidebar({handleAddNewChannel,channel}) {

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
                    <SidebarRow key={channel.id} id={channel.id} channelName={channel.data.channelName} /> 
                ))

            }
            
            <SidebarBottom />
        </div>
    )
}