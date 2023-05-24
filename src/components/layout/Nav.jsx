/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <NavLink to="/inicio">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/articulos">Articulos</NavLink>
                </li>
                <li>
                    <NavLink to="/crear-articulos">Crear Articulos</NavLink>
                </li>
                <li>
                    <NavLink href="/#">Contacto</NavLink>
                </li>
            </ul>
        </nav>
    );
}
