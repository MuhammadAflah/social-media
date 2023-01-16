import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './Pages/Login';
import HomePage from './Pages/Home';
import Users from './Pages/Users';
import Posts from './Pages/Posts';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/usermanage' element={<Users/>}/>
          <Route path='/postmanage' element={<Posts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
