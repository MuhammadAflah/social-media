import { Box } from '@mui/system'
import React from 'react'
import Chat from './Chat/Chat'
import FriendsList from './FriendsList/FriendsList'

function Messages() {
  return (
    <Box flex={4} p={2} justifyContent="space-between" display="flex">
        <FriendsList/>
        <Chat/>
    </Box>
  )
}

export default Messages