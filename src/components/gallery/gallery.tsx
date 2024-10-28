import { FC } from "react";
import { productList } from "../../data/data";
import "./gallery.css";

export const Gallery: FC = () => {
  let index = 0;

  const handleClick = () => {
 
    index = index + 1;
  };

  let product = productList[index];
  return (
    <div className="gallery">
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{product.name} </i>
        by {product.brand}
      </h2>
      <h3>
        ({index + 1} of {productList.length})
      </h3>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
};
