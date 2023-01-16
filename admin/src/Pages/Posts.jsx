import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Postmanage from '../Components/PostMange/Postmange'
import Sidebar from '../Components/Sidebar/Sidebar'

function Posts() {
  return (
    <div className="list" style={{display:"flex", width:"100%"}}>
      <Sidebar/>
      <div className="listContainer" style={{flex:"6"}}>
        <Navbar/>
        <Postmanage/>
      </div>
    </div>
  )
}

export default Posts