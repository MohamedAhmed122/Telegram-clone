import React from 'react'
import Chat from '../../Components/Chat/Chat'
import Sidebar from '../../Layouts/Sidebar/Sidebar'

export default function ChatPage() {
    return (
        <div className='chat_page' style={{display: 'flex'}}>
            <Sidebar />
            <Chat />
        </div>
    )
}
