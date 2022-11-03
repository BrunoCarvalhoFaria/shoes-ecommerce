import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/home";
import LoginScreen from "./pages/login";
import RegisterScreen from "./pages/register";
import StoresScreen from "./pages/stores";

const Rotas = () =>(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/>} /> 
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='/register' element={<RegisterScreen/>} />  
        <Route path='/stores' element={<StoresScreen/>} />       
      </Routes>
    </BrowserRouter>
  );

export default Rotas;