import React, {useState, useEffect} from 'react'
import { Route, Router, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import '../../App.css'


const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const validationSchema = yup.object({
  username: yup.string().min(3,"Ingresa tu ingresa tu username").required("¡Por favor ingresa tu username!"),
  email: yup.string().email("Ingresa tu ingresa tu email address").required(),
  password:yup.string().matches(PASSWORD_REGEX,"Please enter a validate password").required(),
  confirmPassword: yup
  .string()
  .required("Por favor confirma tu contraseña")
  .when("password",{
    is: val => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf([yup.ref("password")],"La contraseña no coincide")
  }),
  first_name:yup.string().min(3,"Ingresa tu nombre").required("¡Por favor ingresa tu nombre!"),
  last_name:yup.string().min(3,"Ingresa tu apellido ").required("¡Por favor ingresa tu apellido!"),
  birthday:yup.string().min(10,"Ingresa tu fecha de nacimiento").required("¡Por favor ingresa tu fecha de nacimiento!")
})

export default function SignUpPage() {
    const history = useHistory();

    const [success, setSuccess]=useState(null);
    const [error, setError]=useState(null);
    
    const onSubmit = async (values) => {
       const {confirmPassword, ...data} = values;
       const response = await axios
       .post("http://localhost:8080/api/auth/signup", data)
       .catch((err) =>
       {if(err && err.response)
        console.log("Error: ",err.response.data);
        setError(err.response.data.message);
        setSuccess(null);
        
      });
      if (response && response.data) {
        setError(null);
        setSuccess(response.data.message);
        formik.resetForm();

      }
     
    };
    const formik = useFormik({
      initialValues : {
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
        first_name:"",
        last_name:"",
        birthday:""},
      validateOnBlur: true,
      onSubmit,
      validationSchema: validationSchema,
    })
   


    return (
        <div className="text-center m-5-auto fondo">
            {!error && <p className='formSuccess'>{success ? success : ""}</p> ||
            !success && <p className='formError'>{error ? error : ""}</p>}
            <h5 class="text-white">Create tu cuenta personal</h5>
            <form onSubmit={formik.handleSubmit}>
                 <p>
                    <p className='fieldValidate'>{formik.touched.username && formik.errors.username ? formik.errors.username:""}</p>
                    <div>
                        <label>Username</label><br/>
                        <input type="text" name="username" 
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                    </div>
                </p>
                <p>
                   <p className='fieldValidate'>{formik.touched.email && formik.errors.email ? formik.errors.email:""}</p>
                  <div>
                    <label>Email</label><br/>
                    <input type="email" name="email" 
                     value={formik.values.email}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur} />
                  </div>
                </p>
                <p>
                    <div><p className='fieldValidate'>{formik.touched.password && formik.errors.password ? formik.errors.password:""}</p>
                    <label>Contraseña</label><br/>
                    <input type="password" name="password" 
                     value={formik.values.password}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur} />
                     </div>
                </p>
                <p>
                    <div><p className='fieldValidate'>{formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword:""}</p>
                    <label>Contraseña de confirmación</label><br/>
                    <input type="password" name="confirmPassword" 
                     value={formik.values.confirmPassword}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur} />
                    </div>
                </p>
                <p><div><p className='fieldValidate'>{formik.touched.first_name && formik.errors.first_name ? formik.errors.first_name:""}</p>
                        <label>Nombre</label><br/>
                        <input type="text" name="first_name" 
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                  </div>
                </p>

                <p><div><p className='fieldValidate'>{formik.touched.last_name && formik.errors.last_name ? formik.errors.last_name:""}</p>
                        <label>Apellido</label><br/>
                        <input type="text" name="last_name" 
                        onChange={formik.handleChange}
                        value={formik.values.last_name}
                        onBlur={formik.handleBlur} />
                  </div>
                </p>
                <p><div><p className='fieldValidate'>{formik.touched.birthday && formik.errors.birthday ? formik.errors.birthday:""}</p>
                        <label>Fecha de Nacimiento</label><br/>
                        <input type="text" name="birthday" 
                        placeholder='2022-01-01'
                        value={formik.values.birthday}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>
                  </div>
                 </p>
                <p>
                    <button id="sub_btn" type='submit' disabled={!formik.isValid}>Registrarse</button>
                </p>
            </form>
            
            <section>
                <p ><Link to="/"><p class="text-white">Volver a la pagina principal.</p></Link></p>
                <p><Link to="/login"><p class="text-white">Iniciar Sesión</p></Link></p>
            </section>
        </div>
    )

}

