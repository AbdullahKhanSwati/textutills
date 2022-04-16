import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
export default function Navbar(props) {


  return (

<>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/" id = "btn2" >{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" id='btn1' aria-current="page" href="/">Home</a>

            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" id = "btn3" >{props.aboutText}</a>
            </li> 


          </ul>
          {/* <htmlForm className="d-flex" >
          <input className="htmlForm-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </htmlForm> */}

           {/* <div className="htmlForm-check htmlForm-switch">
            <input className="htmlForm-check-input" onClick={props.toogle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`htmlForm-check-label text-${props.mTxts}`} htmlFor="flexSwitchCheckDefault">{props.mTxt}</label>
          </div>  */}
          
          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" className="btn btn-danger " onClick={props.redDark}>Red-DarkMode</button>
  <button type="button" className="btn btn-warning">Yellow-DarkMode</button>
  <button type="button" className="btn btn-success">Green-DarkMode</button>
</div>

{/* <div className="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" className="btn btn-outline-primary">Red-DarkMode</button>
  <button type="button" className="btn btn-outline-primary">Middle</button>
  <button type="button" className="btn btn-outline-primary">Right</button>
</div> */}
     


          <div className="form-check form-switch"> 
  <label className={`form-check-label text-${props.mTxts}`} htmlFor="flexSwitchCheckDefault">{props.mTxt}</label>
  <input className="form-check-input" type="checkbox" onClick={props.toogle} role="switch" id="flexSwitchCheckDefault" />
</div>



     
     
        </div>
          

      </div>
    </nav>

</>


  )
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}


//agr koi b title na set kya gya ho to ye bydefault m jo hoga wo set ho jay ga
// Navbar.defaultProps = { title : "Set title" ,
//                         aboutText : "show contact"
//                                       };                 


//is required ka matlab ha k title lazmi set karna ha warna error milly ga
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}