import React, { useState } from 'react';
import Layout from '../layout/Layout'
import NavbarPerfil from '../Navbar/NavbarPerfil'
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import perfil from '../../../assets/images/perfil.png'
const validationSchema = yup.object({
  username: yup.string().min(3,"Campo Username no puede estar vacío").required("¡Por favor ingresa tu username!"),
  email: yup.string().email("Campo Email no puede estar vacío").required("¡Por favor ingresa tu email!"),
  first_name:yup.string().min(3,"Campo Nombre no puede estar vacío").required("¡Por favor ingresa tu nombre!"),
  last_name:yup.string().min(3,"Campo Apellido no puede estar vacío ").required("¡Por favor ingresa tu apellido!"),
  birthday:yup.string().min(10,"Campo Fecha de nacimiento no puede estar vacío").required("¡Por favor ingresa tu fecha de nacimiento!")
})

export default function EditPerfilPage() {
 
  const items=JSON.parse(localStorage.getItem('user-info'));
  const [error, setError]=useState(null);

  //const [user,setUser]=useState([]);


  const onSubmit = async (values) => {
    setError(null);
    console.log(values);
     const response = await axios
     .patch("http://localhost:8080/users/"+items.id,values)
     .catch((err) =>
     {if(err && err.response)
      console.log("Error: ",err.response.data);
      setError(err.response.data.message);
      
    });
    if (response && response.data) {
      window.location.href ="/perfil";

    }
   
  };
  const formik = useFormik({
    initialValues : {
      username:items.username,
      email:items.email,
      first_name:items.first_name,
      last_name:items.last_name,
      birthday:items.birthday},
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  })
 //console.log(user.username)
  console.log(formik.errors)


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
        
            <form class="row g-3" onSubmit={formik.handleSubmit}>
                <div class="col-md-6">
                <p className='fieldValidate'>{formik.touched.email && formik.errors.email ? formik.errors.email:""}</p>
                    <label for="inputEmail4" class="form-label">Correo electrónico</label>
                    <input type="email" class="form-control" id="inputEmail4" name='email'
                      value={formik.values.email}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}/>
                </div>
                <div class="col-md-6">
                <p className='fieldValidate'>{formik.touched.username && formik.errors.username ? formik.errors.username:""}</p>
                    <label for="inputPassword4" class="form-label">Nombre de usuario</label>
                    <input type="text" class="form-control" id="username" name='username'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                </div>
                <div class="col-12">
                <p className='fieldValidate'>{formik.touched.first_name && formik.errors.first_name ? formik.errors.first_name:""}</p>
                    <label for="first_name" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="first_name" name='first_name'
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                </div>
                <div class="col-12">
                <p className='fieldValidate'>{formik.touched.last_name && formik.errors.last_name ? formik.errors.last_name:""}</p>
                    <label for="last_name" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="last_name" name='last_name' 
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                </div>
                <div class="col-md-6">
                <p className='fieldValidate'>{formik.touched.birthday && formik.errors.birthday ? formik.errors.birthday:""}</p>
                    <label for=" birthday" class="form-label">Fecha de Nacimiento</label>
                    <input type="text" class="form-control" id="birthday" name='birthday'
                    value={formik.values.birthday}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}/>
                </div>
                <br></br><br></br>
                <div class="col-12">
                    
                    <button type="submit" class="btn btn-primary boton">Guardar</button>
                    
                </div>
            </form>
            </div> 
       </NavbarPerfil>
        </Layout>
    </div>
)

}

