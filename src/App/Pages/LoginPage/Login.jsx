import React from 'react'
import { useDispatch } from 'react-redux';
import './StyleLogin.css'
import firebase from '../../Firebase/Firebase'
import { userSignIn } from '../../Redux/Auth/AuthAction';

export default function Login() {

    const dispatch = useDispatch();

    const signIn = (selectedProvider) => {
        socialLogin(selectedProvider);
    };
     const socialLogin = async (selectedProvider) => {

        let provider;
    
        const auth = firebase.auth();
        if (selectedProvider === "facebook") {
            provider = new firebase.auth.FacebookAuthProvider();
        }
        if (selectedProvider === "google") {
            provider = new firebase.auth.GoogleAuthProvider();
        }
        try {
            const result = await auth.signInWithPopup(provider);
            console.log(result.user);
            dispatch(userSignIn(result.user));
        } catch (error) {
            console.log(error);
        }
    };
    

   
    return (
        <div className='login'>
            <img src={img} alt=' Logo' />
            <button onClick ={()=>signIn('google')}>Login to Telegram</button>
        </div>
    )
}

const img ='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/768px-Telegram_logo.svg.png'

