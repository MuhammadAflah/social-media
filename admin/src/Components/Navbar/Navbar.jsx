import React from 'react'
import './Navbar.scss'
import {SearchOutlined, DarkModeOutlined, NotificationsNoneOutlined, ChatBubbleOutlineOutlined, ListOutlined} from '@mui/icons-material'
import {Avatar} from '@mui/material'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='wrapper'>
            <div className='search'>
                <input type="text" placeholder='search...' />
                <SearchOutlined/>
            </div>
            <div className="items">
                <div className="item">
                    <DarkModeOutlined className='icon'/>
                </div>
                <div className="item">
                    <NotificationsNoneOutlined className='icon'/>
                    <div className='counter'>1</div>
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlined className='icon'/>
                    <div className='counter'>2</div>
                </div>
                <div className="item">
                    <ListOutlined className='icon'/>
                </div>
                <div className="item">
                <Avatar sx={{width:30, height:30}} src='https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar