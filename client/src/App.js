import './App.css';
import React, { Component }  from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './Pages/Login';
import IndexPage from './Pages/Index';
import SignupPage from './Pages/Signup';
import ProfilePage from './Pages/Profile';
import FriendsPage from './Pages/Friends';
import MessagesPage from './Pages/Messages';
import NotificationPage from './Pages/Notification';
import GroupPage from './Pages/Group';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<IndexPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/friends' element={<FriendsPage/>}/>
          <Route path='/messages' element={<MessagesPage/>}/>
          <Route path='/notifications' element={<NotificationPage/>}/>
          <Route path='/group' element={<GroupPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
