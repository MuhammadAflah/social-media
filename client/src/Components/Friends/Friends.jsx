import { Box } from '@mui/system'
import React from 'react'
import styles from './Friends.module.css'
import image from '../../Assets/Images/profile-bg3.jpg'
import { Avatar, Button, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from '@mui/material'
import { Info } from '@mui/icons-material'
import Followers from './Followers/Followers'



function Friends() {
    return (
        <Box flex={6} p={2}>
            <div className={styles.header}>
                <div className="background-header position-relative">
                    <img src={image} className="img-fluid w-100" alt="header-bg" loading="lazy" />
                    <div className={styles.title}>
                        <div className={styles.data}>
                            <h2>Friend Lists</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Followers/>
        </Box>
    )
}

export default Friends