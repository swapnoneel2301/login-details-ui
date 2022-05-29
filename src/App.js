import React from 'react';
import {BrowserRouter as Router , Navigate,Route , Routes} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Details from './components/Details';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <div className='App'>
          <Routes>
              <Route path='/' element={<Navigate to='/login' replace/>}/>
              <Route path='/login' element={<Login/>} />
              <Route path='/details' 
                    element={
                               <Details/>
                            } 
                />
              <Route path='*' element={<Error/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
