// import styled from '@emotion/styled'
import { Call, EmojiEmotions, Logout, MoreVert, Send, Settings, VideoCall } from '@mui/icons-material'
import { AppBar, Avatar, Box, Button, Divider, IconButton, ListItem, Menu, MenuItem, styled, TextField, Typography } from '@mui/material'
import { width } from '@mui/system'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Chat.css'

const UserBox = styled(Box)(({theme})=>({
    // display: "flex",
    // gap: "10px",
    // alignItems: "center",
    // [theme.breakpoints.up("sm")]:{
    //     display: "none"
    // }
    // display:"none"
}))

function Chat() {
    const [open, setOpen] = useState(false)

  return (
    <Box flex={2} p={2} sx={{height:"50%"}} className="parent">
        <AppBar position='relative' sx={{height:"4rem", border:"1px solid"}} >
            <div className='  d-flex' style={{padding: '0.7rem'}}>
            <Avatar />
            <Typography variant="h6" className='p-1'>sam</Typography>
            <div className='p-2 ms-auto justify-content-space-between'>
            <Call/>
            <VideoCall/>
            <div onClick={(e)=>setOpen(true)} className='bg-error'>
            <MoreVert />
            </div>
            </div>
            </div>
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        <div className='d-flex absolute'>
        {/* <EmojiEmotions sx={{color:"black", width:"4rem"}} className="mt-3"/> */}
        <IconButton aria-label="imoji" size="extra-large">
  <EmojiEmotions fontSize="inherit" />
</IconButton>
      <TextField fullWidth label="Message..." id="fullWidth" />
      <Button variant="contained" endIcon={<Send />}>
        Send
      </Button>
      </div>
    </AppBar>
    </Box>
  )
}

export default Chat