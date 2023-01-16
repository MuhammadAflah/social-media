import { Padding } from '@mui/icons-material';
import { Avatar, Button, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import React from 'react'
import styles from'../../Friends/Friends.module.css'

const itemData = [
    {
      img: 'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
      title: 'saleel',
      author: '@saleel_06',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://storage.googleapis.com/de-lounge/assets/uploads/images/co_brand_1/article/2021/what-is-the-role-of-an-architect-in-building-a-house-1629876140.jpg',
      title: 'safeer',
      author: '@sfr_safeer',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'sam',
      author: '@sam1122',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'nick',
      author: '@nickkkz',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'nasim',
      author: '@nsm_11199',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'haseeb',
      author: '@haseeb_kp',
      rows: 2,
      cols: 2,
      featured: true,
    },
    
  ];

const Followers = () => {
  return (
    <div>
        <ImageList className={styles.imagelist} sx={{ width: "100%", height: 500}} >
      <ImageListItem key="Subheader" cols={2}>
      </ImageListItem>
      
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
          sx={{height:"30%"}}
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                {/* <Info /> */}
                <Button className='m-2' variant="contained">Unfollow</Button>
                <Avatar sx={{width:80, height:80}}/>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  )
}

export default Followers