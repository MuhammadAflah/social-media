import { Box, Stack } from '@mui/system'
import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Notifications from '../Components/Notification/Notification'
import Sidebar from '../Components/Sidebar/Sidebar'

function NotificationPage() {
  return (
    <Box>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Notifications/>
        </Stack>
    </Box>
  )
}

export default NotificationPage