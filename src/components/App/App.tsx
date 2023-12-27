import React from 'react';
import './App.css';
import HomeView from '../../views/HomeView';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFoundView from '../../views/NotFoundView';
import LoginView from '../../views/LoginView';
import ProfileView from '../../views/ProfileView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<HomeView />}></Route>
          <Route path='/login' element={<LoginView />}></Route>
          <Route path='/profile' element={<ProfileView />}></Route>
          <Route path='*' element={<NotFoundView />}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;