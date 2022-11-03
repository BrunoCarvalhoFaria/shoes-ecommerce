import React from "react";

const CarouselItem = (props) => {  
return (
  <div className='item' key={`carousel ${props.id}`}>
    <div className='image'>
      <img src={props.image} alt={props.name}/>
    </div>
    <div className='info'>
      <span className='name'>{props.name}</span>
      <span className='fullPrice'>R$ {props.fullPrice}</span>  
      <span className='price'>R$ {props.price}</span>
    </div>
  </div>
)
}
export default CarouselItem;