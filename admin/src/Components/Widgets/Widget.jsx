import React from 'react'
import './Widget.scss'
import {KeyboardArrowUp, PersonOutlined, DynamicFeed, People} from '@mui/icons-material'

function Widget({type}) {
    let data;

    const amount = 100
    const diff = 20

    switch (type) {
        case "user":
          data = {
            title: "USERS",
            isMoney: false,
            link: "See all users",
            icon: (
              <PersonOutlined
                className="icon"
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />
            ),
          };
          break;
        case "post":
          data = {
            title: "POSTS",
            isMoney: false,
            link: "View all post",
            icon: (
              <DynamicFeed
                className="icon"
                style={{
                  backgroundColor: "rgba(218, 165, 32, 0.2)",
                  color: "goldenrod",
                }}
              />
            ),
          };
          break;
        case "users":
          data = {
            title: "DAILY USERS",
            isMoney: false,
            link: "View daily users",
            icon: (
              <People
                className="icon"
                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
              />
            ),
          };
          break;
        case "posts":
          data = {
            title: "DAILY POST",
            isMoney: false,
            link: "See details",
            icon: (
              <DynamicFeed
                className="icon"
                style={{
                  backgroundColor: "rgba(128, 0, 128, 0.2)",
                  color: "purple",
                }}
              />
            ),
          };
          break;
        default:
          break;
      }
  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "$"} {amount}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
            <div className="percentage positive">
                {/* <KeyboardArrowUp/> */}
                {diff}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget