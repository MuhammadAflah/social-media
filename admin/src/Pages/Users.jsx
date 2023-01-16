import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import UserManage from '../Components/UserManage/UserManage'

function Users() {
  return (
    <div className="list" style={{display:"flex", width:"100%"}}>
      <Sidebar/>
      <div className="listContainer" style={{flex:"6"}}>
        <Navbar/>
        <UserManage/>
      </div>
    </div>
  )
}

export default Users