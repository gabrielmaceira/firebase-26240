import React, { useState, useEffect } from 'react';
import { CharacterList } from './CharacterList';
import { useParams } from 'react-router-dom';
import { data } from '../data/data';

/* import db from './firebase/firebase';
import {  } from 'firebase/firestore'; */

export const CharacterListContainer = ({ greeting }) => {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoader(true);

    const getCharacters = new Promise(res => {
      const myItems = categoryId ? data.filter(char => char.category === categoryId) : data;
      setTimeout(() => {
        res(myItems)
      }, 500)
    })

    getCharacters.then(chars => setCharacters(chars))
      .finally(() => {
        setLoader(false);
      });
  }, [categoryId]);

  return loader ? (
    <h2>CARGANDO...</h2>
  ) : (
    <>
      <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
      <CharacterList characters={characters} />
    </>
  );
};
