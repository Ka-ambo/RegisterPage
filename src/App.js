import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from "./component/Profile";
import SignUp from "./component/SignUp";


function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<SignUp />}/>
        <Route exact path='/show' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
