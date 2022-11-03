import React from "react";
import {useState, useEffect} from "react";

const BrandList = ({brandFilter}) => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch('./static/brands.json')
      .then((response) => response.json()).then(setBrands)
  }, [])  

  return(
    <div className='brandCarousel'>
    {brands.map((item) => {        
        return (
          <div className='item' key={`brand ${item.id}`}  onClick = {() => brandFilter(item.id)}>
            <div className='image'>
              <img src={item.image} alt={item.id}/>
            </div>
          </div>
        )
    })}
    </div>
  )
}

export default BrandList