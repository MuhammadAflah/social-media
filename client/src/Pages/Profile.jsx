import { Box, Stack } from '@mui/system'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Profile from '../Components/Profile/Profile'
import Sidebar from '../Components/Sidebar/Sidebar'

function ProfilePage() {
  return (
    <Box>
        <Navbar/>

        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Profile/>
        </Stack>
    </Box>
  )
}

export default ProfilePage