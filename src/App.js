import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'

import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/user/HomePage'
import PerfilPage from './components/pages/user/PerfilPage'
import EditPerfilPage from './components/pages/user/EditPerfilPage'
import PerfilCIPage from './components/pages/user/PerfilCIPage'
import PerfilCEPage from './components/pages/user/PerfilCEPage'


import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/perfil" component={ PerfilPage } />
                    <Route path="/cursosInscritos" component={ PerfilCIPage } />
                    <Route path="/editPerfil" component={EditPerfilPage}/>
                    <Route path="/certificados" component={ PerfilCEPage }/>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Copyright 2022 - Cáceres, Medina, Sierra, Turin</p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: "100%",
    color: "#fff",
    bottom: 0,
    padding: "2rem",
    margin: 0,
    width: "100%",
    opacity: ".8"
}
