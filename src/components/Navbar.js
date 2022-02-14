import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {

    const highlight = (event)=>{
        let home=document.getElementById('home');
        let about=document.getElementById('about');
        // console.log(event.target);
        // event.target.classList.add('active');
        if(event.target.id==='home'){
            home.classList.add('active')
            about.classList.remove('active')
        }
        else if(event.target.id==='about'){
            about.classList.add('active')
            home.classList.remove('active')
        }
    }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
        <div className="navbar-brand">{props.title}</div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link id="home" className="nav-link" onClick={highlight} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link id="about" className="nav-link" onClick={highlight} to="/about">{props.aboutText}</Link>
            </li>
            </ul>
            {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'Dark':'Light'} Mode</label>
            </div>
        </div>
        </div>
    </nav>
  );
}

Navbar.propTypes = {
    title:PropTypes.string,
    aboutText:PropTypes.string
}
// Navbar.propTypes = {
//     title:PropTypes.string.isRequired,
//     aboutText:PropTypes.string
// }

Navbar.defaultProps = {
    title:'Set title here',
    aboutText:'About'
}
