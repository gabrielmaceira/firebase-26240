import React, { useState, useEffect } from 'react';
import { CharacterDetail } from './CharacterDetail';
import { useParams } from 'react-router-dom';
import { data } from '../data/data'


/* import db from './firebase/firebase';
import { getDoc, doc } from 'firebase/firestore'; */

export const CharacterDetailContainer = () => {
  const [charData, setCharData] = useState({});
  const [loading, setLoading] = useState(false)
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true)
    const getCharacter = new Promise((res) => {
      setTimeout(() =>
        res(data.find(char => char.id === itemId))
        , 500)
    })

    getCharacter.then(item => setCharData(item)).finally(() => setLoading(false))
  }, []);

  return loading ? <h2>Cargando...</h2> : <CharacterDetail {...charData} />;
};
