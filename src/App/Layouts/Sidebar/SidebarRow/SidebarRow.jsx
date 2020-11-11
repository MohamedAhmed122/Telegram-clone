import { Avatar} from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

import './StyleSidebarRow.css'

export default function SidebarRow({src, id,channelName}) {
   
    return (
        <Link className='sidebar_row_main' to={`/channel/${id}`}>
            <div className='sidebar_row'>
                <div className='sidebar_left'>
                    <Avatar src={src} />
                    <div className='sidebar_info'>
                        <strong  >{channelName}</strong>
                        <p className='text'>text</p>
                    </div>
                </div>
                <p>time</p>
            </div>
            <div className='line'/>
        </Link>
        
    )
}
