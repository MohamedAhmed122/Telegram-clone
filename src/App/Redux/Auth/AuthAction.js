import { USER_SIGN_IN, USER_SIGN_OUT } from "./AuthType";


export const userSignIn = user =>({
    type: USER_SIGN_IN,
    payload: user
}) 

export const userSignOut = () =>({
    type: USER_SIGN_OUT,
  
}) 