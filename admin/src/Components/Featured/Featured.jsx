import React from 'react'
import './Featured.scss'
import {MoreVert} from '@mui/icons-material'
import {CircularProgressbar} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css";

function Featured() {
  return (
    <div className='featured'>
        <div className='top'>
            <h1 className='title'>Total Users</h1>
            <MoreVert fontSize='small'/>
        </div>
        <div className='bottom'>
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title">Total users register today</p>
            <p className="amount">25</p>
            
        </div>
    </div>
  )
}

export default Featured