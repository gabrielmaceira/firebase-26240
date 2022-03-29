import React from 'react';
import { Character } from './Character';

export const CharacterList = ({ characters }) => {
  return (
    <section className="flex-row">
      {characters?.map((character) => (
        <Character {...character} key={character.id} />
      ))}
    </section>
  );
};
