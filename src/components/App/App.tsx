// @ts-nocheck
import React from 'react';
import './App.css';
import ProductsView from '../../views/ProductsView';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NotFoundView from '../../views/NotFoundView';
import LoginView from '../../views/LoginView';
import ProfileView from '../../views/ProfileView';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Navigate to="/products" />}/>
          <Route path='/products' element={<ProductsView />}>
            <Route path=':id'/>
          </Route>
          <Route path='/login' element={<LoginView />}></Route>
          <Route path='/profile' element={<ProfileView />}></Route>
          <Route path='*' element={<NotFoundView />}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;