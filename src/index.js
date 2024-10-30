import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// PATH USUARIO
import Home from './pages/Home/index.js'
import Login from './pages/Login/index.jsx';
import NaoEncontrado from './pages/naoEncontrado/index.jsx';

// PATH DESAIGUINER
import HomeAdmin from './pages/AdministrarTelas/HomeAdmin/index.js';
import AdicionarServico from './pages/AdministrarTelas/AdicionarServico/index.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route path='/admin' element={<HomeAdmin />} />
        <Route path='/criar-servico' element={<AdicionarServico/>}/>

        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
