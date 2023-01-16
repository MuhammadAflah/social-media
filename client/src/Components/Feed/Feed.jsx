import { Box } from '@mui/material'
import React from 'react'
import Post from '../Post/Post'
import Stories from '../Stories/Stories'

function Feed() {
  return (
    <Box  flex={4} p={2}>
        <Stories/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>

    </Box>
  )
}

export default Feed