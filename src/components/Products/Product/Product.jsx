import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      className="product-card"
      onClick={() => navigate("/product/" + data._id)}
    >
      <div className="thumbnail">
        <img src={data.productImage} />
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        <span className="price">&#8377;{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
