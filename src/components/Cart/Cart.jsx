import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
import { loadStripe } from "@stripe/stripe-js";
import { createOrder, makePaymentRequest } from "../../utils/api";

import "./Cart.scss";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, setShowCart, cartSubTotal } = useContext(Context);
  const navigate = useNavigate();

  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );

  // console.log(cartItems);

  const handlePayment = async () => {
    if (!cartItems.length) return;
    if (!stripePromise) {
      console.log("Stripe is not loaded");
      return;
    }
    const stripe = await stripePromise;
    // console.log(stripe);
    try {
      const paymentResponse = await makePaymentRequest(cartItems);
      // const res = await createOrder(cartItems);
      // console.log(res, paymentResponse);
      console.log("Result", paymentResponse);
      const result = await stripe.redirectToCheckout({
        sessionId: paymentResponse.id,
      });
      // navigate(`/order/success/${res.id}`);
    } catch (err) {
      console.log(err);
      navigate("/order/rejected");
    }
  };

  return (
    <div className="cart-panel">
      <div className="opac-layer" onClick={() => setShowCart(false)}></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose className="close-btn" />
            <span className="text">close</span>
          </span>
        </div>

        {!cartItems.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart.</span>
            <button
              className="return-cta"
              onClick={() => {
                navigate("/");
                setShowCart(false);
              }}
            >
              RETURN TO SHOP
            </button>
          </div>
        )}

        {!!cartItems.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377;{cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handlePayment}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
