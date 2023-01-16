import { Stack, Box, createTheme, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import Feed from '../Components/Feed/Feed'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import Rightbar from '../Components/Rightbar/Rightbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Add from '../Components/Add/Add'
import Stories from '../Components/Stories/Stories'

function IndexPage() {
    const [mode, setMode] = useState("light")

    const darkTheme = createTheme({
        palette:{
            mode:mode
        }
    })
  return (
    <ThemeProvider theme={darkTheme}>

    <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        
        <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode}/>
            <Feed/>
            <Rightbar/>
        </Stack>
        <Add/>
    </Box>
    </ThemeProvider>
  )
}

export default IndexPage