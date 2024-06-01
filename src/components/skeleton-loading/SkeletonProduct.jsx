import React from "react";

const SkeletonProduct = () => {
  return (
    <div className="skeleton-product-card">
      <div className="skeleton-thumbnail"></div>
      <div className="skeleton-prod-details">
        <div className="skeleton-name"></div>
        <div className="skeleton-price"></div>
      </div>
    </div>
  );
};

export default SkeletonProduct;
