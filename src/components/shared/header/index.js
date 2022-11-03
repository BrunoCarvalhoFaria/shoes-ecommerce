import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"



const Header = () => {
  let navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  }
  const goToRegister = () => {
    navigate('/register');
  }
  const goToStores = () => {
    navigate('/stores');
  }

  const goToHome = () => {
    navigate('/');
  }

  return (
  <div className='header'>
    <div className='logo'>
      <img onClick= {goToHome} src='../../../static/images/logo.png' alt='Logo Dev Bruno Shoes'/>
    </div>
    <div className='menu'>
      <button onClick={goToStores}>Stores</button>
      <button onClick={goToRegister}>Register</button>
      <button onClick={goToLogin}>Login</button>
      <button className='carrinho'><img src="../../../static/images/carrinho.png" alt="carrinho"/></button>
    </div>
  </div>
  )
}

export default Header;