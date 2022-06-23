import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const NavbarPerfil = ({children}) => {
    return (
        <main>
        <hr></hr>
       <div class="row ">
            <div class="col col-lg-3 fondo2">
            <Link to="/perfil">
                Datos de tu perfil
            </Link>
            <hr></hr>
            <Link to="/cursosInscritos">
                Cursos Inscritos
            </Link>
            <hr></hr>
            <Link to="/certificados">
                Certificados
            </Link>
            <hr></hr>
            <Link to="/">
                Log out
            </Link>
            <hr></hr>
            </div>
           <div class="col fondo4">
            {children}
            </div> 
       </div>
   </main>
    )
}

export default NavbarPerfil