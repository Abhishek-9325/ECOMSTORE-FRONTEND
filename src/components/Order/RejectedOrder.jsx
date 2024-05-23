import "./Order.scss";
const RejectedOrder = () => {
  return (
    <div className="order-main-content">
      <div className="layout">
        <div className="order-title">Your Order has not been placed.</div>
        <div className="order-desc">
          There was something wrong while placing the order.
        </div>
      </div>
    </div>
  );
};

export default RejectedOrder;
