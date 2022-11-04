import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"
import { useState } from "react";



const Header = () => {
  let navigate = useNavigate();

  const goToLogin = () => {
    setActive('')
    navigate('/login');
  }
  const goToRegister = () => {
    setActive('')
    navigate('/register');
  }
  const goToStores = () => {
    setActive('')
    navigate('/stores');
  }

  const goToHome = () => {
    setActive('')
    navigate('/');
  }

  const goToCart = () => {
    setActive('')
  }

  const [active, setActive] = useState('') 

  const changeActive = () => {
    if (active === ''){
      setActive("active")
    }else {
      setActive('')
    }
  }

  return (
    <header>
      <nav className="navbar">       
        <div className="nav-brading">          
          <img src="../../../static/images/logo.png" alt="logo"/>
          <span>Dev. Bruno</span>
        </div>
        <ul className={`nav-menu ${active}`}>
          <li className="nav-item">             
            <span className="nav-link" onClick={goToHome}>Home</span>            
          </li>
          <li className="nav-item">          
            <span className="nav-link" onClick={goToStores}>Stores</span>            
          </li>
          <li className="nav-item">          
            <span className="nav-link" onClick={goToRegister}>Register</span>
          </li>
          <li className="nav-item">          
            <span className="nav-link" onClick={goToLogin}>Login</span>
          </li>
          <li className="nav-item">      
            <span className="nav-link"><img onClick={goToCart} className='cart' src="../../../static/images/carrinho.png" alt="cart"/></span>            
          </li>
        </ul>
        <div className={`hamburger ${active}`} onClick = {changeActive}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>         
        </div>
      </nav>
    </header>
  )
}

export default Header;