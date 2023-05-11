import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  // [defaulttheme, darktheme] = useState();
  // document.getElementsByTagName("body")[0].setAttribute("dark-theme", "");
  const theme = () => {
    if (document.getElementById("flexSwitchCheckDefault").checked === true) {
      document.getElementsByTagName("body")[0].setAttribute("dark-theme", "dark");
      
    }
    else {
      document.getElementsByTagName("body")[0].setAttribute("dark-theme", "light");
      
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
       <Link className="navbar-brand" to={"/"}>{ props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to={'/about'}>About</Link>
        </li>
        <li className="nav-item">
             <Link className="nav-link active" aria-current="page" to={"/contact"}>Contact Us</Link>
              </li>
        
      </ul>
      
    </div>
              {/* a toggle for dark theme */}
        <div className="form-check form-switch">
  <input className="form-check-input" onChange={theme} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><i class="fa-solid fa-moon fa-shake fa-xl"></i></label>
</div>
  </div>
      </nav>
    </div>
    )
    
}

Navbar.prototype = {
    title: PropTypes.string
};