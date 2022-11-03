import React from "react";
import { useEffect, useState } from "react";
import ReturnSizeAvaible from "./returnSizeAvaible";
// import Modal from "./modal";

const FilteredList = ({filter}) => {
  const [listShoes, setlistShoes] = useState([]);
  useEffect(() => {
    fetch("./static/shoes.json")
      .then((response) => response.json())
      .then(setlistShoes);
  }, []);

  // const onClose = () => {
  //   console.log("Cheguei aqui");
  //   setisModalVisible(false);
  // };
  // const [isModalVisible, setisModalVisible] = useState(false);

  return (
    <div className="shoesList">
      {listShoes.map((item) => {
        const { id, name, fullPrice, price, image, sizes, brand/*, description*/ } =
          item;
        if (brand === filter || filter === "all") {
          return (
            <div className="item" key={`list ${id}`}>
              <div className="image">
                <img
                  src={image}
                  alt={name}
                  // onClick={() => setisModalVisible(true)}
                />
                {/* {isModalVisible ? (
                  <Modal
                    onClose={onClose}
                    id={id}
                    name={name}
                    fullPrice={fullPrice}
                    price={price}
                    image={image}
                    sizes={sizes}
                    description={description}
                  />
                ) : null} */}
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <ul className="shoesSize">
                  {sizes.map((size) => (
                    <ReturnSizeAvaible id={id} size={size} />
                  ))}
                </ul>
                <span className="fullPrice">R$ {fullPrice}</span>
                <span className="price">R$ {price}</span>
              </div>
            </div>
          );
        } else return null;
      })}
    </div>
  );
};
export default FilteredList;
