import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// PATH USUARIO
import Home from './pages/Home/index.js'
import Login from './pages/Login/index.jsx';
import NaoEncontrado from './pages/naoEncontrado/index.jsx';

//teste
import Logar from './pages/Login/index.js';

// PATH DESAIGUINER
import HomeAdmin from './pages/AdministrarTelas/HomeAdmin/index.js';
import AdicionarServico from './pages/AdministrarTelas/AdicionarServico/index.js';
import AdicionarPortfolio from './pages/AdministrarTelas/AdicionarPortfolio/index.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* ROTA PARA O USUARIO*/}
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />

        {/* ROTA PARA O ADMINISTRADOR*/}
        <Route path='/admin' element={<HomeAdmin />} />
        <Route path='/criar-servico' element={<AdicionarServico/>}/>
        <Route path='/criar-servico/:id' element={<AdicionarServico />} />
        <Route path='/criar-portfolio' element={<AdicionarPortfolio/>}/>
        <Route path='/criar-portfolio/:id' element={<AdicionarPortfolio />} />



        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
