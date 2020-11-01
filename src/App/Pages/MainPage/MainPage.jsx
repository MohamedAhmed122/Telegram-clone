import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../LoginPage/Login'

export default function MainPage() {
    const { isAuthenticated } = useSelector(state =>  state.auth)
    return (
        <div className='main_page'>
            {!isAuthenticated?
             <Login /> : <h1>I am Already Logged in </h1>
            }
           
        </div>
    )
}
