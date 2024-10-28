import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// PATH USUARIO
import Home from './pages/Home/index.js'
import Login from './pages/Login/index.jsx';
import NaoEncontrado from './pages/naoEncontrado/index.jsx';

// PATH DESAIGUINER
import HomeAdmin from './pages/AdministrarTelas/HomeAdmin/index.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route path='/homeAdmin' element={<HomeAdmin />} />

        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
