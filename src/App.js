import './App.css';
import Login from './Components/Login';
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import UserList from './Components/UserList';
import UserProfile from './Components/UserProfile';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <main className='py-3'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/user' element={<UserList/>}/>

                <Route path='/user/:id' element={<UserProfile/>}/>
                
            </Routes>

        </main>

    </Router>

    </div>
  );
}

export default App;
