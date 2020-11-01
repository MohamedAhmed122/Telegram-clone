import { Avatar } from '@material-ui/core'
import React from 'react'

import './StyleSidebarRow.css'

export default function SidebarRow({src}) {
    return (
        <div className='sidebar_row_main'>
            <div className='sidebar_row'>
                <div className='sidebar_left'>
                    <Avatar src={src} />
                    <div className='sidebar_info'>
                        <strong  >Mohamed Youssef</strong>
                        <p className='text'>text</p>
                    </div>
                </div>
                <p>time</p>
            </div>
            <div className='line'/>
        </div>
        
    )
}
