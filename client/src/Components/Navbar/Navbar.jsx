import {  React,useState } from 'react';
import { AppBar, Box, InputBase, styled, Toolbar, Typography,Badge, Avatar, MenuItem, Menu, Divider, ListItem } from '@mui/material'
import {Tag, Mail, Notifications, PersonAdd, Settings, Logout} from "@mui/icons-material"
import { Link } from 'react-router-dom';


const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
});
const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))
const Icons = styled(Box)(({theme})=>({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}))
const UserBox = styled(Box)(({theme})=>({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}))

function Navbar() {
    const [open, setOpen] = useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>HashTag</Typography>
            <Tag sx={{display:{xs:"block", sm:"none"}}}/>
            <Search><InputBase placeholder='Search...'/></Search>
            <Icons>
            <Badge badgeContent={4} color="error">
                <Mail/>
            </Badge>
            <Link to='/notifications'>
            <Badge badgeContent={2} color="error">
                <Notifications sx={{color:"white"}}/>
            </Badge>
            </Link>
            <Avatar sx={{width:30, height:30}} src='https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg'
            onClick={(e)=>setOpen(true)}
            />
            </Icons>
            <UserBox onClick={(e)=>setOpen(true)}>
            <Link to='/profile'>
            <Avatar sx={{width:30, height:30}} src='https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg'/>
            </Link>
            <Typography variant='span'>Aflah</Typography>
            </UserBox>
        </StyledToolbar>
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
        <Link to='/profile'>
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        </Link>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItem>
            <Settings fontSize="small" />
          </ListItem>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItem>
            <Logout fontSize="small" />
          </ListItem>
          <Link to='/login'>Logout</Link> 
        </MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar