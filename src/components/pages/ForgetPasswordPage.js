import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function ForgetPasswordPage() {
    return (
        <div className="text-center m-5-auto fondo">
            <h2>Restablece tu contraseña</h2>
            <h5>Ingresa tu correo electrónico and nosotros podemos enviarte tu nueva contraseña</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Correo electrónico</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Enviar correo electrónico de restablecimiento de contraseña</button>
                </p>
            </form>
            <section>
                <p class="text-white"><strong>Primera vez? </strong><Link to="/register" class="text-white">Create una cuenta</Link>.</p>
                <p><Link to="/" class="text-white">Volver a la página principal</Link>.</p>
            </section>
        </div>
    )
}
