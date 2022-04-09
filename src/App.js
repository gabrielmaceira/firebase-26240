import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { CharacterDetailContainer } from './components/CharacterDetailContainer';
import { CharacterListContainer } from './components/CharacterListContainer';
/* import { data } from './data/data';
import db from './firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { fileUpload } from './firebase/fileUpload'; */

export default function App() {

/*   const uploadCharacters = () => {

    data.forEach( async el => {
      const imgURL = await fileUpload(el.image)

      await addDoc(collection(db, "characters"), { ...el, image: imgURL })

    })

  } */

  return (
    <BrowserRouter>
      <NavBar />

{/*       <button onClick={uploadCharacters}>SUBIR PERSONAJES</button> */}

      <Routes>
        <Route path="/" element={<CharacterListContainer greeting={'LISTA DE PERSONAJES'} />} />
        <Route path="/category/:categoryId" element={<CharacterListContainer greeting={'LISTA DE PERSONAJES FILTRADOS'} />} />
        <Route path="/character/:itemId" element={<CharacterDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
