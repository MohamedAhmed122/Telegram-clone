import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import CommentIcon from '@material-ui/icons/Comment';
import CallIcon from '@material-ui/icons/Call';
import SettingsIcon from '@material-ui/icons/Settings';

import './StyleSidebarBottom.css'

export default function SidebarBottom() {
    return (
        <div className='sidebar_bottom_main'>
            <div className='sidebar_bottom_icons'>
                <Avatar src='https://pagesix.com/wp-content/uploads/sites/3/2020/03/bebe-rexha-30.jpg?quality=80&strip=all' />
                <CallIcon />
                <CommentIcon />
                <SettingsIcon />
            </div>
        </div>
    )
}
