import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import ImgFondo from '../../assets/images/fondo.png'
import Img1 from '../../assets/images/img1.jpg'
import Img2 from '../../assets/images/img2.jpg'
import Img3 from '../../assets/images/img3.jpg'
import Img4 from '../../assets/images/img4.jpg'
import Img5 from '../../assets/images/img5.jpg'
import Img6 from '../../assets/images/img6.png'
import Img7 from '../../assets/images/img7.jpg'
import Icon2 from '../../assets/images/icono2.jpg'
import userGirl from '../../assets/images/user1.png'
import userBoy from '../../assets/images/user2.png'
import remoto from '../../assets/images/remoto.png'
import servicio2 from '../../assets/images/servicio2.jpg'
import servicio3 from '../../assets/images/servicio3.jpg'
export default function LandingPage() {
    return (
        <div>  
            <header className='headerlanding' style={ HeaderStyle }>
            <nav>
                <a href="/">Inicio</a>
                <a href="#">Acerca de</a>
                <a href="#">Portafolio</a>
                <a href="#">Servicios</a>
                <a href="#">Contacto</a> 
            </nav>
                <h1 className="main-title text-center">My Virtual Academy</h1>
                <h3 className="sub-title text-center">Potencia tus conocimientos al 100%</h3>
                <p className="main-para text-center">¡Registrate ahora y no pierdas el tiempo!</p>
                <div className="buttons text-center">
                    <Link to="/login">
                        <button className="primary-button">Iniciar Sesión</button>
                    </Link>
                    <Link to="/register">
                        <button className="primary-button" id="reg_btn"><span>Registrarse</span></button>
                    </Link>
                </div>
            </header>
            <main>
                <section class="contenedor sobre-nosotros">
                    <h2 class="titulo">Nuestro Servicio</h2>
                    <div class="contenedor-sobre-nosotros">
                       <img src={ImgFondo} alt="" class="imagen-about-us "/>
                        <div class="contenido-textos">
                            <h3><span>1</span>Los mejores cursos web</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolor placeat voluptatem voluptatum veritatis explicabo laborum fugit dolore voluptate incidunt illum totam rem dolorum aperiam repellat, fuga dolores tenetur commodi.</p>
                            <h3><span>2</span>Tu mejor opción</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolor placeat voluptatem voluptatum veritatis explicabo laborum fugit dolore voluptate incidunt illum totam rem dolorum aperiam repellat, fuga dolores tenetur commodi.</p>
                        </div>
                    </div>
                </section>    
                <section class="portafolio">
                    <div class="contenedor">
                        <h2 class="titulo">Cursos</h2>
                        <div class="galeria-port">

                            <div class="imagen-port">
                                <img src={ImgFondo} alt=""/>
                                <div class="hover-galeria">
                                    <img src={Icon2} alt=""/>
                                    <p>cursos</p>
                                </div>
                            </div>
                            <div class="imagen-port">
                                <img src={Img1} alt=""/>
                                <div class="hover-galeria">
                                    <img src={Icon2} alt=""/>
                                    <p>cursos</p>
                                </div>
                            </div>
                            <div class="imagen-port">
                                <img src={Img2} alt=""/>
                                <div class="hover-galeria">
                                    <img src={Icon2} alt=""/>
                                    <p>cursos</p>
                                </div>
                            </div>
                            <div class="imagen-port">
                                <img src={Img3} alt=""/>
                                <div class="hover-galeria">
                                    <img src={Icon2} alt=""/>
                                    <p>cursos</p>
                                </div>
                            </div>
                            <div class="imagen-port">
                                <img src={Img4} alt=""/>
                                <div class="hover-galeria">
                                    <img src={Icon2} alt=""/>
                                    <p>cursos</p>
                                </div>
                            </div>
                            <div class="imagen-port">
                                <img src={Img5} alt=""/>
                                <div class="hover-galeria">
                                    <img src={Icon2} alt=""/>
                                    <p>cursos</p>
                                </div>
                            </div>
                            <div class="imagen-port">
                                <img src={Img6} alt=""/>
                                <div class="hover-galeria">
                                    <img src={Icon2} alt=""/>
                                    <p>cursos</p>
                                </div>
                            </div>
                            <div class="imagen-port">
                                <img src={Img7} alt=""/>
                                <div class="hover-galeria">
                                    <img src={Icon2} alt=""/>
                                    <p>cursos</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section class="clientes contenedor">
                    <h2 class="titulo">Que dicen nuestros alumnos </h2>
                    <div class="cards">
                        <div class="card">
                            <img src={userGirl} alt=""/>
                            <div class="contenido-texto-card">
                                <h4>Aracely Sanchez Morales</h4>
                                <p>"Mi experiencia con los curso intermedios, principalmente con Python y PHP, fue realmente buena porque ... In doloribus minima voluptatibus soluta architecto nemo quam, iste molestias vero temporibus, facere commodi ipsum accusamus officia! "</p>
                            </div>
                        </div>
                        &nbsp;
                        <div class="card">
                            <img src={userBoy} alt=""/>
                            <div class="contenido-texto-card">
                                <h4>Luis Cesar Rosales Rucabado</h4>
                                <p>"Les cuento jovenes, antes de entrar a la academia me era dificil entender varios temas o leguanjes de programación, pero gracias a ésta academia puedo asegurar que podrán entenderán varios temas de manera clara y además actualizada. Encantado con su servicio...acere commodi ipsum accusamus officia!" </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="about-services">
                    <div class="contenedor">
                        
                        <h2 class="titulo">Nuestros servicios</h2>
                        <div class="servicio-cont">
                            <div class="servicio-ind">
                                <img src={remoto} alt=""/>
                                <h3>Conozca mas de nuestras modalidades</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, expedita!</p>
                            </div>
                            <div class="servicio-ind">
                                <img src={servicio2} alt=""/>
                                <h3>Tour Virtual</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, expedita!</p>
                            </div>
                            <div class="servicio-ind">
                                <img src={servicio3} alt=""/>
                                <h3>Política de Privacidad</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, expedita!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        
    )
}

const HeaderStyle = {
   // width: "100%",
   // height: "100vh",
   //background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative", 
}
