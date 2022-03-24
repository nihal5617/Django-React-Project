import { React, useState,useEffect } from 'react'
import '../../css/styles.css'
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location=useLocation();
    const logout=()=>{
        setUser(null);
        console.log(localStorage);
        delete localStorage["profile"]
    }
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-color">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    {user && (<li><a className="dropdown-item nav-link" onClick={logout} href="#">Logout</a></li>)}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">{user? (user.result ? (user.result.name):(user.name +" "+user.lastname)):(<div>Login</div>)}</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
