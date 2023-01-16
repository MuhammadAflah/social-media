import React from 'react'
import './Home.scss'
import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar'
import Widget from '../Components/Widgets/Widget'
import Featured from '../Components/Featured/Featured'
import Chart from '../Components/Chart/Chart'

function HomePage() {
  return (
    <div className='home'>
        <Sidebar/>
        <div className='homeContainer'>
            <Navbar/>
            <div className='widgets'>
                <Widget type="user" />
                <Widget type="post"/>
                <Widget type="users"/>
                <Widget type="posts"/>
            </div>
            <div className='charts'>
                <Featured/>
                <Chart/>
            </div>
        </div>
    </div>
  )
}

export default HomePage