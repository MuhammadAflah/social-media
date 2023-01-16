import { Box } from '@mui/system'
import React from 'react'
import styles from './Group.module.css'
import image from '../../Assets/Images/profile-bg7.jpg'
import { Avatar, Button, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from '@mui/material'
import { Info } from '@mui/icons-material'
import GroupList from './GroupList/GroupList'



function Group() {
    return (
        <Box flex={6} p={2}>
            <div className={styles.header}>
                <div className="background-header position-relative">
                    <img src={image} className="img-fluid w-100" alt="header-bg" loading="lazy" />
                    <div className={styles.title}>
                        <div className={styles.data}>
                            <h2>Group Lists</h2>
                        </div>
                    </div>
                </div>
            </div>
            <GroupList/>
        </Box>
    )
}

export default Group