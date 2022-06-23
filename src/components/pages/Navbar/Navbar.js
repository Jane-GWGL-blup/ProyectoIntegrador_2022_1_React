import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                        <Link to="/home">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        </Link>
                        <Link to="/perfil">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Perfil</a>
                        </li>
                        </Link>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            More actions ...
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Historial de cursos</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <Link to="/">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Log out</a>
                        </li>
                        </Link>
                        </ul>
                    </div>
                </nav>
    )
}

export default Navbar