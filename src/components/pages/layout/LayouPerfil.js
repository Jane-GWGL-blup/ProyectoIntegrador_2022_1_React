import React, { Fragment } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
    return (
        <Fragment>
            <Navbar/>
            {children}
        </Fragment>
    )
}

export default Layout