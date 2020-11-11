
import {
    combineReducers
} from 'redux';

import authReducer from './Auth/AuthReducer'
import chatReducer from './Chat/ChatReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    chat: chatReducer,
    
})
export default rootReducer