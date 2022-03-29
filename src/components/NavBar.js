import React from 'react';
import { NavLink, Link } from 'react-router-dom';
//uso de categorias en un array para que puedan ser dinamicas en un futuro. irian en la NavBar ej: traerlas de una base de datos

export const NavBar = () => {
  const categories = [
    { id: 'asfadd', address: '/', text: 'TODOS LOS PERSONAJES' },
    { id: '123asf', address: '/category/ranged', text: 'A distancia' },
    { id: 'sgs3q3', address: '/category/closecombat', text: 'Cuerpo a cuerpo' },
  ];

  return (
    <section style={{ background: 'lightgray' }}>
      {categories.map((cat) => {
        return (
          <div className="links" key={cat.id}>
            <NavLink to={cat.address} className={({isActive}) => isActive ? "activeClass" : ""}>
              {cat.text}
            </NavLink>
            {/* POR SI USAN BOOTSTRAP */}
            {/* <Nav.Link as={Link} to={cat.address}></Nav.Link> */}
          </div>
        );
      })}
    </section>
  );
};
