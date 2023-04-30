import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! */}
            <Link to="/">
                <i className="fa fa-home"></i> 
                <span>&nbsp;</span>Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i>
                <span>&nbsp;</span>Usuários
            </Link>
        </nav>
    </aside>