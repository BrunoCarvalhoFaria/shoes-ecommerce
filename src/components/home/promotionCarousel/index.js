import React, { Fragment } from "react";
import { useState, useEffect, useRef } from "react";
import CarouselItem from "./carouselItem";

const PromotionShoes = () => {
  const [promotionShoes, setpromotionShoes] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('./static/shoes.json')
      .then((response) => response.json()).then(setpromotionShoes)
  }, [])

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }
  if(!promotionShoes || !promotionShoes.length) return null;
    return(
      <Fragment>
        <div className='promotion'>
            <span className='text'>BLACK FRIDAY!!</span>
        </div>
        <div className='carousel' ref = {carousel}>
          {promotionShoes.map((item) =>             
            <CarouselItem id = {item.id}
                          name={item.name}
                          image={item.image}
                          fullPrice={item.fullPrice}
                          price={item.price}/>
          )}
        </div>
        <div className='carouselButtons'>
          <button onClick={handleLeftClick}>
            <img src="./static/images/carousel-arrow.png" alt="Scroll Left"/>
          </button>
          <button onClick={handleRightClick}>
            <img src="./static/images/carousel-arrow.png" alt="Scroll Rigth"/>
          </button>
        </div>
      </Fragment>
  )
}

export default PromotionShoes;