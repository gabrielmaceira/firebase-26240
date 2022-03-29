import React from 'react';

export const CharacterDetail = ({ id, name, image }) => {
  return (
    <div className="detail-row">
      <img src={image} alt={`${id}-${name}`} className="flex-col" />
      <section className="flex-col">
        <h1>{name}</h1>
        <p>Aca iria la descripcion</p>
      </section>
    </div>
  );
};
