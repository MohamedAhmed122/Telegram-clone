import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './StyleHeader.css'

export default function Header() {
    return (
        <div className='header'>
            <div className='header_main'>
                <div className='header_left'>
                    <Avatar src={img} />
                    <div className='header_info'>
                        <strong>Mohamed Youssef</strong>
                        <p>TimeSamp</p>
                    </div>
                </div>
                <IconButton>
                    <MoreHorizIcon />
                </IconButton> 
            </div>
            
        </div>
    )
}

const img = 'https://www.rollingstone.com/wp-content/uploads/2019/08/taylor-swift-ultimate-album-sheff.jpg'