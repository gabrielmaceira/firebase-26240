import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { CharacterDetailContainer } from './components/CharacterDetailContainer';
import { CharacterListContainer } from './components/CharacterListContainer';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CharacterListContainer greeting={'LISTA DE PERSONAJES'} />} />
        <Route path="/category/:categoryId" element={<CharacterListContainer greeting={'LISTA DE PERSONAJES FILTRADOS'} />} />
        <Route path="/character/:itemId" element={<CharacterDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
