import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./Order.scss";
const SuccessOrder = () => {
  const { id } = useParams();
  const { data } = useFetch(`/api/orders/${id}`);
  return (
    <div className="order-main-content">
      <div className="layout">
        <p className="order-title">Your Order has been successfully placed.</p>
        <p className="order-desc">
          We will connect with you regarding your order on email.
        </p>
        <p className="order-thank-text">
          Thank your for showing interest in our products
        </p>
        {data?._id && (
          <div className="order-title">Order No : #{data?._id} </div>
        )}
        {data?.products && (
          <Products headingText="Your Orders" products={data?.products} />
        )}
      </div>
    </div>
  );
};

export default SuccessOrder;
