import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import {} from '@mui/material'
import {Dashboard, PermIdentityOutlined, DynamicFeedOutlined, Logout} from '@mui/icons-material'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className='logo'>Admin</span>
        </div>
        <hr />
        <div className='center'>
            <ul>
                <Link to='/'>
                <li>
                    <Dashboard/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <Link to='/usermanage'>
                <li>
                    <PermIdentityOutlined/>
                    <span>User Management</span>
                </li>
                </Link>
                <Link to='/postmanage'>
                <li>
                    <DynamicFeedOutlined/>
                    <span>Post Management</span>
                </li>
                </Link>
                <Link to='/login'>
                <li>
                    <Logout/>
                    <span>Logout</span>
                </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar