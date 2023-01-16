import { Box, Stack } from '@mui/system'
import React from 'react'
import Friends from '../Components/Friends/Friends'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'

function FriendsPage() {
  return (
    <Box>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Friends/>
        </Stack>
    </Box>
  )
}

export default FriendsPage