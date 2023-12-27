import React from 'react';
import './App.css';
import HomeView from '../../views/HomeView';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<HomeView />}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;