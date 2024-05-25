import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Discover a world of elegance and style. Explore our handpicked
            selection of premium fashion and accessories.
          </p>
          <div className="ctas">
            <div className="banner-cta v2">
              <Link className="anchor-link" to={"/category"}>
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} />
      </div>
    </div>
  );
};

export default Banner;
