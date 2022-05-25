import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './Global.scss';

import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Feed from './pages/Feed/Feed';
import Users from './pages/Users/Users';
import Profile from './pages/Profile/Profile';

function App() {
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
          element={<Feed/>}>
        </Route>
        
        <Route exact path="/users" 
          element={<Users/>}>
        </Route>
       
        <Route exact path="/profile" 
          element={<Profile/>}>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
