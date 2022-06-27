import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import NavbarPerfil from '../Navbar/NavbarPerfil'
import perfil from '../../../assets/images/perfil.png'
export default function PerfilCEPage(){
    const items=JSON.parse(localStorage.getItem('user-info'));
    return (
        <div className="text-center fondo">
            <Layout>
            <div className='fondo3'>
            <header className='header'>
                <div>
                    <img className="imgperfil" src={perfil}/>
                </div>
           </header>
           </div>
           
           <NavbarPerfil>
            <br></br>
           <div class="col-6">
                        <div class="card">
                            <img src="https://i.ytimg.com/vi/Nvm7JzhUpc4/mqdefault.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <br></br>
           </NavbarPerfil>
            </Layout>
        </div>
    )
}