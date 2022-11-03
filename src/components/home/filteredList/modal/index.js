import React from "react";
import ReturnSizeAvaible from "../returnSizeAvaible";

const Modal = ({
  idContent = "modal",
  onClose,
  id,
  name,
  fullPrice,
  price,
  image,
  sizes,
  description,
}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === idContent) onclose();
  };

  return (
    <div
      id={idContent}
      className="modal"
      onClick={handleOutsideClick}
      
      key={`modal ${id}`}
    >
      <div className="container">
        <img
          className="close"
          onClick={onclose}
          alt="X"
          src="./static/images/close.png"
        />
        <div className="content">
          <div className="image">
            <img src={image} alt={name} />
          </div>
          <div className="info">
            <span className="name">{name}</span>
            <ul className="shoesSize">
              {sizes.map((size) => (
                <ReturnSizeAvaible id={id} size={size} />
              ))}
            </ul>
            <span className="description">{description}</span>
            <span className="fullPrice">R$ {fullPrice}</span>
            <span className="price">R$ {price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
