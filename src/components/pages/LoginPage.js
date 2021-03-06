import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import '../../App.css'
import '../../Estilos.css'

const validationSchema = yup.object({
    username: yup.string().required("Por favor ingresa un nombre de usuario válido"),
    password: yup.string().required("Por favor ingresa una contraseña válida")
})

export default function SignInPage() {

    const [error, setError]=useState(null);
    const onSubmit = async (values) => {
        setError(null);
        const response = await axios
        .post("http://localhost:8080/api/auth/signin", values)
        .catch((err) =>
        {if(err && err.response)
         console.log("Error: ",err.response.data);
         err.response.data.message = "Malas credenciales";
         setError(err.response.data.message);
       });
       if (response && response.data) {
             const data = await response.data;
            localStorage.setItem("user-info",JSON.stringify(data));
            console.log(response); 
         formik.resetForm();
         window.location.href ="/home";
       }
     };

    const formik = useFormik({
        initialValues : {
          username:"",
          password:""},
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
      })


    return (
        <div class="body">
            <div className="text-center m-5-auto fondo">
            <h2 class="text-white">Inicio de Sesión</h2>
             <h3 className='formError'>{error ? error: ""}</h3>
            <form class="div-form" onSubmit={formik.handleSubmit}>
                <div>
                    <p>
                    <p className='fieldValidate'>{formik.touched.username && formik.errors.username ? formik.errors.username:""}</p>
                    <div>
                        <label>Nombre de Usuario</label><br/>
                        <input type="text" name="username" 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                         />
                     </div>
                    </p>
                </div>
                <div>
                    <p>
                    <p className='fieldValidate'>{formik.touched.password && formik.errors.password ? formik.errors.password:""}</p>
                        <div>
                        <label>Contraseña</label>
                        <br/>
                        <input  type="password" name="password" 
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required /><br/>
                        <Link to="/forget-password"><label className="right-label">¿Olvidaste tu contraseña?</label></Link>
                        </div>
                    </p>
                </div>
                <div>
                    <p>
                        <button 
                        id="sub_btn" type="submit" disabled={!formik.isValid}>Iniciar Sesión</button>
                    </p>
                </div>
            </form>
            <section>
                <p class="text-white">¿Primera vez? <Link to="/register"><p class="text-white"><strong>Crear una cuenta</strong></p></Link></p>
                <p><Link to="/"><p class="text-white"><strong>Volver</strong></p></Link>.</p>
            </section>
        </div>
        </div>
    )
}
