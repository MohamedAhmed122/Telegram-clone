
import React from 'react'

import { CircularProgress } from '@material-ui/core'
import './StyleLoading.css'


export default function Loader() {
    return (
        <div className='loader'>
             <CircularProgress className='loading' size={50} />
        </div>
    )
}