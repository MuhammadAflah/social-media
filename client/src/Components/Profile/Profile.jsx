import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Post from '../../Components/Post/Post'
import React from "react";
import './Profile.scss';
import { Box, Typography } from "@mui/material";
import { Edit } from "@mui/icons-material";

const Profile = () => {
  return (
    <Box flex={4} p={2}>
    <div className="profile">
      <div className="images">
        <img
          src="https://media.istockphoto.com/photos/programming-code-abstract-technology-background-of-software-deve-picture-id537331500?b=1&k=20&m=537331500&s=612x612&w=0&h=Ni1xaMtCOiGvH4NKnl7Y4uTMqXEjd8cYwBDDOjk4TKE="
          alt=""
          className="cover"
        />
        <img
          src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span className="mt-5">Muhammad Aflah  <Edit/></span>
            <div className="info">
              {/* <div className="item">
                <PlaceIcon />
                <span>India</span>
              </div> */}
              
            </div>
            {/* <button>follow</button> */}
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
            <div className="follow">
            <span className="mt-3">Followers: 100</span><br />
            <span>Following: 100</span>
            </div>
          </div>
        </div>
      <Post/>
      </div>
    </div>
    </Box>
  );
};

export default Profile;