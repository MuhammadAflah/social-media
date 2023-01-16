import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Group from '../Components/Group/Group'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'

function GroupPage() {
  return (
    <Box>
        <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        <Group/>
        </Stack>
    </Box>
  )
}

export default GroupPage