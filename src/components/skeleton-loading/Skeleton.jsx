import React from "react";

const Skeleton = ({ type }) => {
  const classes = `skeleton ${type}`;

  return (
    <div className={classes}>
      {type === "title" && <div className="skeleton-title"></div>}
      {type === "categories" && (
        <div className="skeleton-categories">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="skeleton-category"></div>
          ))}
        </div>
      )}
      {type === "products" && (
        <div className="skeleton-products">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="skeleton-product"></div>
          ))}
        </div>
      )}
      {type === "single-product" && (
        <div className="skeleton-single-product-page">
          <div className="skeleton-left">
            <div className="skeleton-thumbnail"></div>
          </div>
          <div className="skeleton-right">
            <div className="skeleton-name"></div>
            <div className="skeleton-price"></div>
            <div className="skeleton-desc"></div>
            <div className="skeleton-cart-buttons">
              <div className="skeleton-quantity-buttons">
                <div className="skeleton-quantity-button"></div>
                <div className="skeleton-quantity-button"></div>
                <div className="skeleton-quantity-button"></div>
              </div>
              <div className="skeleton-add-to-cart-button"></div>
            </div>
            <div className="skeleton-divider"></div>
            <div className="skeleton-info-item"></div>
            <div className="skeleton-info-item"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skeleton;
