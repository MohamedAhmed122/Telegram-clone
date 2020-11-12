// eslint-disable-next-line strict
'use strict'
import {
    combineReducers
} from 'redux';

import authReducer from './Auth/AuthReducer'


const rootReducer = combineReducers({
    auth: authReducer,
})
export default rootReducer