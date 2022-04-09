import React, { useState, useEffect } from 'react';
import { CharacterList } from './CharacterList';
import { useParams } from 'react-router-dom';
import db from '../firebase/firebase';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';

export const CharacterListContainer = ({ greeting }) => {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoader(true);

    const queryChar = categoryId ? query(collection(db, "characters"), where("category", "==", categoryId), orderBy("name"))
      : query(collection(db, "characters"), orderBy("name"))

    getDocs(queryChar)
    .then(res => {
      const formattedData = res.docs.map(el => {
        return { id: el.id, ...el.data() }
      })

      setCharacters(formattedData)
    })
    .catch(err => console.log(err))
    .finally(() => setLoader(false))


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
