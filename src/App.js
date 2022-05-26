import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React , { useState } from "react";

import './Global.scss';

import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Feed from './pages/Feed/Feed';
import Users from './pages/Users/Users';
import Profile from './pages/Profile/Profile';

// Context Components
import { NavbarContext } from './contexts/NavbarContext';

function App() {

  const [navbarSelect , setNavbarSelect] = useState('feed');

  return (
    <Router>
      <Routes>

        <Route exact path="/" 
          element={<Login/>}>
        </Route>

        <Route exact path="/signup" 
          element={<Signup/>}>
        </Route>

        <Route exact path="/feed" 
          element={
            <NavbarContext.Provider value={ {navbarSelect , setNavbarSelect} }>
              <Feed />
            </NavbarContext.Provider>
          }>
        </Route>
        
        <Route exact path="/users" 
          element={
            <NavbarContext.Provider value={ {navbarSelect , setNavbarSelect} }>
              <Users />
            </NavbarContext.Provider>
          }>
        </Route>
       
        <Route exact path="/profile" 
          element={
            <NavbarContext.Provider value={ {navbarSelect , setNavbarSelect} }>
              <Profile />
            </NavbarContext.Provider>
          }>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
