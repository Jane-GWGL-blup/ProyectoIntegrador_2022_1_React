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
import user from '../../assets/images/user.png'
import remoto from '../../assets/images/remoto.png'
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
                <h1 className="main-title text-center">Potencia tus conocimientos al menos un 200%</h1>
                <p className="main-para text-center">join us now and don't waste time</p>
                <div className="buttons text-center">
                    <Link to="/login">
                        <button className="primary-button">log in</button>
                    </Link>
                    <Link to="/register">
                        <button className="primary-button" id="reg_btn"><span>register </span></button>
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
                            <h3><span>2</span>Los mejores cursos web</h3>
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
                            <img src={user} alt=""/>
                            <div class="contenido-texto-card">
                                <h4>Name</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam quos quidem. In doloribus minima voluptatibus soluta architecto nemo quam, iste molestias vero temporibus, facere commodi ipsum accusamus officia!</p>
                            </div>
                        </div>
                        &nbsp;
                        <div class="card">
                            <img src={user} alt=""/>
                            <div class="contenido-texto-card">
                                <h4>Name</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id ullam quos quidem. In doloribus minima voluptatibus soluta architecto nemo quam, iste molestias vero temporibus, facere commodi ipsum accusamus officia!</p>
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
                                <h3>Name</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, expedita!</p>
                            </div>
                            <div class="servicio-ind">
                                <img src={remoto} alt=""/>
                                <h3>Name</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, expedita!</p>
                            </div>
                            <div class="servicio-ind">
                                <img src={remoto} alt=""/>
                                <h3>Name</h3>
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
