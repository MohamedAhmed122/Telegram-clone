import { Avatar} from '@material-ui/core'
import { useEffect, useState } from 'react'
import firebase from '../../../Firebase/Firebase'
import { Link } from 'react-router-dom'
import './StyleSidebarRow.css'

export default function SidebarRow({src, id,channelName}) {

    const [massages, setMassages] = useState([])
    const db = firebase.firestore()

    useEffect(()=>{
        if (id){
            db.collection('channels').doc(id).collection('massages')
            .orderBy('timeStamp','asc')
            .onSnapshot(snapshot=>{
                 setMassages(snapshot.docs.map(doc=> doc.data()))
             })
      
        }
       
        
    },[id, db, setMassages])
    return (
        <Link className='sidebar_row_main' to={`/channel/${id}`}>
            <div className='sidebar_row'>
                <div className='sidebar_left'>
                    <Avatar src={src} />
                    <div className='sidebar_info'>
                        <strong  >{channelName}</strong>
                        <p className='text'>{massages[0]?.massages}</p>
                    </div>
                </div>
                <p>time</p>
            </div>
            <div className='line'/>
        </Link>
        
    )
}
