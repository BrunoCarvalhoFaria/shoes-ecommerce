import React, { Fragment } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";


const Stores = () => {
  let navigate = useNavigate();

  const onclose = () => {
    navigate('/');
  }
  const handleOutsideClick = (e) => {    
    if (e.target.className === 'containerStoresPage') onclose();
  };
  return (
    <Fragment>
      <div className="containerStoresPage" onClick = {handleOutsideClick}>
        <div className="storesPage">
          <div className="close">
            <img
              className="closeImage"          
              onClick={onclose}
              alt="X"
              src="./static/images/close.png"
            />
          </div>
          <div className="title">
            <h2>Stores:</h2>        
          </div>
          <div className="store">
            <h4 className="adress">Palmares, Belo Horizonte/MG - Brazil</h4> 
            <iframe className= "mapStore" title = "lojaPalmares" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d938.033037551378!2d-43.934274370761784!3d-19.876640999164618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69a62c375ff55%3A0xf9f04e603750f2cf!2sR.%20Cel.%20Ja%C3%ADro%20Pereira%2C%2043%20-%20Palmares%2C%20Belo%20Horizonte%20-%20MG%2C%2031160-560!5e0!3m2!1spt-BR!2sbr!4v1584971584605!5m2!1spt-BR!2sbr"></iframe>        
          </div> 

          <div className="store">
            <h4 className="adress">Santa Terezinha, Belo Horizonte/MG - Brazil</h4> 
            <iframe className= "mapStore" title = "lojaSantaTerezinha" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7504.530522190959!2d-44.00233!3d-19.871018!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x45621858bb4401f4!2sDrogamaxi%20Santa%20Terezinha!5e0!3m2!1spt-BR!2sbr!4v1584972501784!5m2!1spt-BR!2sbr"></iframe>      
          </div>
        </div>
      </div>
    </Fragment>
  );

  
}

export default Stores;