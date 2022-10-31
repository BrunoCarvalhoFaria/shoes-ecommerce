import { useState, useEffect, useRef } from 'react';

import './App.css';

function App() {
  const [promotionShoes, setpromotionShoes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [listShoes, setlistShoes] = useState([]);

  const carousel = useRef(null);

  let brandFilter = '';

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
      .then((response) => response.json()).then(setpromotionShoes)
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/static/brands.json')
      .then((response) => response.json()).then(setBrands)
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json')
      .then((response) => response.json()).then(setlistShoes)
  }, [])

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  const filterBrand = (e) => {
    e.preventDefault();    
    brandFilter = e.target.alt;
    console.log(brandFilter)  
  }

  if(!promotionShoes || !promotionShoes.length) return null;

  return (
    <div className='container'>
      <div className='header'>
        <div className='logo'>
          <img src='./static/images/logo.png' alt='Logo Dev Bruno Shoes'/>
        </div>
        <div className='menu'>
          <button>Stores</button>
          <button>Register</button>
          <button>Login</button>
          <button className='carrinho'><img src="./static/images/carrinho.png" alt="carrinho"/></button>
        </div>
      </div>
      <div className='promotion'>
        <span className='text'>BLACK FRIDAY!!</span>
      </div>
      <div className='carousel' ref = {carousel}>
        {promotionShoes.map((item) => {
          const {id, name, fullPrice, price, image} = item;
          return (
            <div className='item' key={`carousel ${id}`}>
              <div className='image'>
                <img src={image} alt={name}/>
              </div>
              <div className='info'>
                <span className='name'>{name}</span>
                <span className='fullPrice'>R$ {fullPrice}</span>  
                <span className='price'>R$ {price}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className='carouselButtons'>
        <button onClick={handleLeftClick}>
          <img src="./static/images/carousel-arrow.png" alt="Scroll Left"/>
        </button>
        <button onClick={handleRightClick}>
          <img src="./static/images/carousel-arrow.png" alt="Scroll Rigth"/>
        </button>
      </div>
      <div className='brandCarousel'>
      {brands.map((item) => {
          const {id, image} = item;
          return (
            <div className='item' key={`brand ${id}`}>
              <div className='image'>
                <img onClick={filterBrand} src={image} alt={id}/>
              </div>
            </div>
          )
      })}
      </div>
      <div className='shoesList'>
      {listShoes.map((item) => {
          const {id, name, fullPrice, price, image, sizes, brand} = item;
          if(brand === brandFilter || brandFilter === ''){
            return (
              <div className='item' key={`list ${id}`}>
                <div className='image'>
                  <img src={image} alt={name}/>                
                </div>
                <div className='info'>
                  <span className='name'>{name}</span>
                  <ul className='shoesSize'>
                    {sizes.map((size) => {
                      return(
                      <li className='size'>
                      <input name={`shoesSize ${id}`} type='radio' id={`${size} ${id}`}/>
                      <label htmlFor={`${size} ${id}`}>{size}</label>
                      </li>)
                    })
                    }        
                  </ul>
                  <span className='fullPrice'>R$ {fullPrice}</span>
                  <span className='price'>R$ {price}</span>
                </div>
              </div>
            )}else return null
      })}          
      </div>


      <div className='footer'>        
        <div className='logo'>
          <img src='./static/images/logo.png' alt='Logo Dev Bruno Shoes'/>
        </div>
        <div className='contact'>
          <span>@Bruno Faria</span>          
          <span>email: devbrunofaria@gmail.com</span>
          <div className='socialMedia'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>             
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default App;
