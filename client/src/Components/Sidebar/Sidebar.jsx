import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { AccountCircle, AutoStories, Chat, Groups, Home, ModeNight, Person, Storefront, Tune } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Sidebar({mode,setMode}) {
  return (
    <Box flex={1}  sx={{display:{xs:"none", sm:"none", md:"block"}}}>
        <Box position="fixed">
        <List sx={{color:"black"}}>
           <Link to='/'> 
          <ListItem disablePadding>
            <ListItemButton LinkComponent='/'>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/messages">
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample-list'>
              <ListItemIcon>
                <Chat/>
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to='/group'>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample-list'>
              <ListItemIcon>
                <Groups/>
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>
          </Link>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample-list'>
              <ListItemIcon>
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <Link to="/friends">
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample-list'>
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          </Link>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample-list'>
              <ListItemIcon>
                <Tune/>
              </ListItemIcon>
              <ListItemText primary="settings" />
            </ListItemButton>
          </ListItem>
          <Link to='/profile'>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircle/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          </Link>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#sample-list'>
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch onChange={(e)=>setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
          
        </List>
        </Box>
    </Box>
    
  )
}

export default Sidebar