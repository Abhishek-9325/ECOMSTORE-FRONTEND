import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { Context } from "../../utils/context";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import Skeleton from "../skeleton-loading/Skeleton";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { handleAddToCart, setShowCart } = useContext(Context);
  const { data, loading, error } = useFetch(`/api/products/${id}`);

  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  if (loading) {
    return (
      <div className="single-product-main-content">
        <div className="layout">
          <Skeleton type="single-product" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="single-product-main-content">
        <div className="layout">
          <div className="error">Error: {error.message}</div>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={data.productImage} alt={data.title} />
          </div>
          <div className="right">
            <span className="name">{data.title}</span>
            <span className="price">&#8377;{data.price}</span>
            <span className="desc">{data.description}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data, quantity);
                  setShowCart(true);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category: <span>{data.category?.name}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts productId={id} categoryId={data?.category?._id} />
      </div>
    </div>
  );
};

export default SingleProduct;
