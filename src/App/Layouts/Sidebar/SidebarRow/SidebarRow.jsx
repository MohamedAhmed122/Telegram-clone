import { Avatar} from '@material-ui/core'
import { useEffect, useState } from 'react'
import firebase from '../../../Firebase/Firebase'
import { Link } from 'react-router-dom'
import './StyleSidebarRow.css'

export default function SidebarRow({ id,channelName}) {

    const [massages, setMassages] = useState([])
    const db = firebase.firestore()
    const [seed, setSeed] = useState() 

    useEffect(()=>{
        if (id){
            db.collection('channels').doc(id).collection('massages')
            .orderBy('timeStamp','desc')
            .onSnapshot(snapshot=>{
                 setMassages(snapshot.docs.map(doc=> doc.data()))
             })
      
        }
       
        
    },[id, db, setMassages])

    useEffect(()=>{
        setSeed(Math.floor(Math.random()* 5000))

    },[id])

    const img = `https://avatars.dicebear.com/api/human/${seed}.svg`
    return (
        <Link className='sidebar_row_main' to={`/channel/${id}`}>
            <div className='sidebar_row'>
                <div className='sidebar_left'>
                    <Avatar src={img} />
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
