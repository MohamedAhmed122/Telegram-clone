
import React from 'react'
import Chat from '../../Components/Chat/Chat'
import Sidebar from '../../Layouts/Sidebar/Sidebar'
import { Switch,  Route} from "react-router-dom";
import './StyleChatPage.css'

export default function ChatPage() {
    return (
        <div className='chat_page'>
            <>
                <Sidebar />
                <Switch>
                    <Route  path='/channel/:channelId'>
                        <Chat/>
                    </Route>
                </Switch>
            </>
           
           
           
        </div>
    )
}
