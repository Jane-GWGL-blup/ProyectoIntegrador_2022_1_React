import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout/Layout'
import NavbarPerfil from '../Navbar/NavbarPerfil'
import perfil from '../../../assets/images/perfil.png'
export default function PerfilPage(){
    const items=JSON.parse(localStorage.getItem('user-info'));
    
    const [user,setUser]=useState([]);

    //Funciona
        useEffect(()=>{
          let url="http://127.0.0.1:8080/users/"+items.id
          fetch(url)
            .then((res)=>res.json())
            .then((json)=>{
              console.log(json);
              setUser((json));
            });
        },[]);


    return (
        <div className="text-center fondo">
            <Layout>
                <div className='fondo3'>
            <header className='header'>
                <div >
                    <img className="imgperfil" src={perfil}/>
                </div>
           </header></div>
           <NavbarPerfil>
            <div className='fondo4'>
  
                <form class="row g-3" >
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Correo electrónico</label>
                        <input type="email" class="form-control" id="inputEmail4" value={user.email} disabled/>
                    </div>
                    <div class="col-md-6">
                        <label for="username" class="form-label">Nombre de usuario</label>
                        <input type="text" class="form-control" id="usernmae" value={user.username} disabled/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="inputFirstName" value={user.first_name} disabled/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="inputLastName" value={user.last_name} disabled/>
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">Fecha de Nacimiento</label>
                        <input type="text" class="form-control" id="inputCity"  value={user.birthday} disabled/>
                    </div>
                
                    <br></br><br></br>
                    <div class="col-12">
                        <div class="row">
                            
                                <Link to="/editPerfil">
                                <button type="submit" class="btn btn-primary boton">Editar Perfil</button>
                                </Link>
                            
                        </div>
                        
                    </div>
                </form>
                </div> 
           </NavbarPerfil>
            </Layout>
        </div>
    )
}