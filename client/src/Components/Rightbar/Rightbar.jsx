import { Avatar, AvatarGroup, Box, Button, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import './Rightbar.css'

function Rightbar() {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box className='rightbar' >
                <Typography varient="h6" fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={7}>
                    <Avatar alt="Remy Sharp" src="https://m.media-amazon.com/images/M/MV5BMDE0ZjMzOTAtMzU2OS00ZDVmLWFlMjYtMThlOWYwMDBiN2E3XkEyXkFqcGdeQWFsZWxvZw@@._V1_.jpg" />
                    <Avatar alt="Travis Howard" src="https://static01.nyt.com/images/2019/04/16/sports/16onsoccerweb-2/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-articleLarge.jpg?quality=75&auto=webp&disable=upscale" />
                    <Avatar alt="Cindy Baker" src="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=800x" />
                    <Avatar alt="Agnes Walker" src="https://static.wikia.nocookie.net/expendables/images/7/76/Scott_adkins.jpg/revision/latest?cb=20140619180949" />
                    <Avatar alt="Trevor Henderson" src="https://i.pinimg.com/736x/24/fb/a8/24fba8681acf5793630c1bca9dd65f2e.jpg" />
                    <Avatar alt="Agnes Walker" src="https://static.wikia.nocookie.net/expendables/images/7/76/Scott_adkins.jpg/revision/latest?cb=20140619180949" />
                </AvatarGroup>
                <Typography varient="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img
                            src={`https://media.realinstitutoelcano.org/wp-content/uploads/2021/11/ir-ecolepolytechnique-jbarande.jpg`}
                            alt="image"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={`https://www.cio.com/wp-content/uploads/2022/06/spot_future_of_work_cso_3x2_2400x1600_hero_laptop_user_with_virtual_security_overlay_by_ibrave_gettyimages-100876236-orig.jpg?quality=50&strip=all`}
                            alt="image"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src={`https://itchronicles.com/wp-content/uploads/2021/06/future-of-cybersecurity.jpg`}
                            alt="image"
                        />
                    </ImageListItem>
                </ImageList>

                <Typography varient="h6" fontWeight={100} mt={2} >Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=800x" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>

                <Typography varient="h6" fontWeight={100} mt={2} >Suggestions</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=800x" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Tom cruise"
                            secondary={
                                <Stack spacing={1} direction="row" >
                                <Button variant="contained">Follow</Button>
                                <Button variant="outlined" color='error'>Dismiss</Button>
                                </Stack>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <Stack spacing={1} direction="row">
                                <Button variant="contained">Follow</Button>
                                <Button variant="outlined" color='error'>Dismiss</Button>
                                </Stack>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <Stack spacing={1} direction="row">
                                <Button variant="contained">Follow</Button>
                                <Button variant="outlined" color='error'>Dismiss</Button>
                                </Stack>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Rightbar