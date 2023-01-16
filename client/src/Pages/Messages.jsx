import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Messages from '../Components/Messages/Messages'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'

function MessagesPage() {
  return (
    <Box>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Messages/>
        </Stack>
    </Box>
  )
}

export default MessagesPage