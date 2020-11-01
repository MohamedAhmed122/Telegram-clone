import React from 'react'
import Chat from '../../Components/Chat/Chat'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import './StyleChatPage.css'

export default function ChatPage() {
    return (
        <div className='chat_page'>
            <Sidebar />
            <Chat />
        </div>
    )
}
