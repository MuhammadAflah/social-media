import { Fab, Modal, Tooltip, Typography, styled, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import React from 'react';
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import { Box } from '@mui/system';
import { useState } from 'react';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})
const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom: "20px"
})

function Add() {
    const [open, setOpen]= useState(false)
    return (
        <>
            <Tooltip title="Add" sx={{ position: "fixed", bottom: 20 }} onClick={(e)=>setOpen(true)}>
                <Fab color='primary' aria-label='add'>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={(e)=>setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography varient="h6" color="grey" textAlign="center">Create Post</Typography>
                    <UserBox>
                        <Avatar
                            src='https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg'
                            sx={{width: 30, height: 30}}
                        />
                        <Typography fontWeight={500} varient="span">Aflah</Typography>
                    </UserBox>
                    <TextField
                        sx={{width:"100%"}}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="Whats on your mind.."
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotions color='primary'/>
                    <Image color='secondary'/>
                    <VideoCameraBack color='success'/>
                    <PersonAdd color='error'/>
                    </Stack>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth mb={2}>
                      <Button >Post</Button>
                      <Button sx={{width:"100px"}}>
                        
                        <DateRange/></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add