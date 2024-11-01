import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
export default function NavBar1(props) {
    return (
        <>

            <nav className={props.mode ? "navbar navbar-expand-lg  navbar-dark bg-dark" : "navbar navbar-expand-lg bg-body-tertiary"}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                        </ul>

                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" value={props.mode} onChange={props.changeMode}></input>
                            {props.mode ? <h6 style={{ color: 'white' }}>Enable Light Mode</h6> : <h6>Enable Dark Mode</h6>}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
NavBar1.propTypes = {
    title: PropTypes.string.isRequired,
    aboutTitle: PropTypes.string.isRequired
}

// NavBar1.defaultProps={
//     title:'set title here',
//     aboutTitle:'set about Title here'
// }