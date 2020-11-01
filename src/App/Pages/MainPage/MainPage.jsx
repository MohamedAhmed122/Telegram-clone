import React from 'react'
import { useSelector } from 'react-redux'
import ChatPage from '../ChatPage/ChatPage'
import Login from '../LoginPage/Login'

export default function MainPage() {
    const { isAuthenticated } = useSelector(state =>  state.auth)
    return (
        <div className='main_page'>
            {!isAuthenticated?
             <Login /> : <ChatPage />
            }
           
        </div>
    )
}
