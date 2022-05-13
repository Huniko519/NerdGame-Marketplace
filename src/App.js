import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Homepage/Home';
import Header from './components/Header/Header'

import './App.css';
import Market from './pages/Market';
import PostPage from './pages/PostPage';
import Newgame from './pages/Newgame';
import Cartridges from './pages/Cartridges';
import LockBox from './pages/Lock-Box';
import BuySell from './pages/BuySell';
function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/1' element={<Market />}></Route>
          <Route exact path='/2' element={<PostPage />}></Route>
          <Route exact path='/3' element={<Newgame />}></Route>
          <Route exact path='/4' element={<Cartridges />}></Route>
          <Route exact path='/5' element={<LockBox />}></Route>
          <Route exact path='/6' element={<BuySell />}></Route>



        </Routes>
      </BrowserRouter>
      {/* <TopGames/> */}
    </>
  );
}

export default App;
