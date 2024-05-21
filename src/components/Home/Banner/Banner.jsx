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
            Convallis interdum purus adipiscing dis parturient posuere ac a quam
            a eleifend montes parturient posuere curae tempor
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
