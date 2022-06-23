import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import NavbarPerfil from '../Navbar/NavbarPerfil'

export default function PerfilCEPage(){
    const items=JSON.parse(localStorage.getItem('user-info'));
    return (
        <div className="text-center fondo">
            <Layout>
            <div className='fondo3'>
            <header className='header'>
                <div>
                    <img className="imgperfil" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'/>
                </div>
           </header>
           </div>
           
           <NavbarPerfil>
           <div class="col-4">
                        <div class="card">
                            <img src="https://i.ytimg.com/vi/Nvm7JzhUpc4/mqdefault.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                   <div class="col-4">
                   <div class="card">
                            <img src="https://boluda.com/files/curso-javascript-300x157.png" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                   </div>
           </NavbarPerfil>
            </Layout>
        </div>
    )
}