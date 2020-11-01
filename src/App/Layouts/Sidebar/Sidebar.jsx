import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import BorderColorIcon from '@material-ui/icons/BorderColor';

import './StyleSidebar.css'


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <div className='search'>
                    <SearchIcon />
                    <input type='text' placeholder='Search for Channel or Chat Room' />
                </div>
            </div>
            <BorderColorIcon />
        </div>
    )
}
