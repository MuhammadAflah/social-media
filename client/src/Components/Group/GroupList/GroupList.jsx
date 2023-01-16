import { Padding } from '@mui/icons-material';
import { Avatar, AvatarGroup, Button, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import React from 'react'
import styles from'../../Group/Group.module.css'

const itemData = [
    {
      img: 'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
      title: 'Space',
      author: '@Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus ex, dapibus et nisl sit amet, lobortis tempus elit. Donec iaculis lectus vitae sapien commodo dignissim. Nulla id diam mauris. Pellentesque tincidunt, felis nec vulputate tempus, felis est cursus urna, at facilisis est dui ac metus. Nullam scelerisque diam dapibus rhoncus efficitur. Donec consectetur venenatis sagittis. Nulla massa odio, bibendum sed velit sed,',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://storage.googleapis.com/de-lounge/assets/uploads/images/co_brand_1/article/2021/what-is-the-role-of-an-architect-in-building-a-house-1629876140.jpg',
      title: 'Architect world',
      author: '@Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus ex, dapibus et nisl sit amet, lobortis tempus elit. Donec iaculis lectus vitae sapien commodo dignissim. Nulla id diam mauris. Pellentesque tincidunt, felis nec vulputate tempus, felis est cursus urna, at facilisis est dui ac metus. Nullam scelerisque diam dapibus rhoncus efficitur. Donec consectetur venenatis sagittis. Nulla massa odio, bibendum sed velit sed,',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'vintage',
      author: '@Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus ex, dapibus et nisl sit amet, lobortis tempus elit. Donec iaculis lectus vitae sapien commodo dignissim. Nulla id diam mauris. Pellentesque tincidunt, felis nec vulputate tempus, felis est cursus urna, at facilisis est dui ac metus. Nullam scelerisque diam dapibus rhoncus efficitur. Donec consectetur venenatis sagittis. Nulla massa odio, bibendum sed velit sed,',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'coding',
      author: '@Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus ex, dapibus et nisl sit amet, lobortis tempus elit. Donec iaculis lectus vitae sapien commodo dignissim. Nulla id diam mauris. Pellentesque tincidunt, felis nec vulputate tempus, felis est cursus urna, at facilisis est dui ac metus. Nullam scelerisque diam dapibus rhoncus efficitur. Donec consectetur venenatis sagittis. Nulla massa odio, bibendum sed velit sed,',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'fashon',
      author: '@Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus ex, dapibus et nisl sit amet, lobortis tempus elit. Donec iaculis lectus vitae sapien commodo dignissim. Nulla id diam mauris. Pellentesque tincidunt, felis nec vulputate tempus, felis est cursus urna, at facilisis est dui ac metus. Nullam scelerisque diam dapibus rhoncus efficitur. Donec consectetur venenatis sagittis. Nulla massa odio, bibendum sed velit sed,',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'food',
      author: '@Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus ex, dapibus et nisl sit amet, lobortis tempus elit. Donec iaculis lectus vitae sapien commodo dignissim. Nulla id diam mauris. Pellentesque tincidunt, felis nec vulputate tempus, felis est cursus urna, at facilisis est dui ac metus. Nullam scelerisque diam dapibus rhoncus efficitur. Donec consectetur venenatis sagittis. Nulla massa odio, bibendum sed velit sed,',
      rows: 2,
      cols: 2,
      featured: true,
    },
    
  ];

const GroupList = () => {
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
          sx={{height:"50%", background:"black"}}
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(150, 235, 200, 255)' }}
                aria-label={`info about ${item.title}`}
              >
                {/* <Info /> */}
                <Button className='m-2' variant="contained">join</Button>
                {/* <Avatar sx={{width:80, height:80}}/> */}
                <AvatarGroup max={4} sx={{display:{xs:"none", sm:"inline"}}}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                  {/* <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" /> */}
                </AvatarGroup>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  )
}

export default GroupList