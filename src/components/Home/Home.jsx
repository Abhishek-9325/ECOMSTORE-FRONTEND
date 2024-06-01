import React, { useContext, useEffect } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import Skeleton from "../skeleton-loading/Skeleton";
import useFetch from "../../hooks/useFetch";
import { Context } from "../../utils/context";

const Home = () => {
  const { setProducts, setCategories } = useContext(Context);

  const {
    data: products,
    loading: loadingProducts,
    error: productsError,
  } = useFetch("/api/products");

  const {
    data: categories,
    loading: loadingCategories,
    error: categoriesError,
  } = useFetch("/api/categories");

  // Set products and categories in context when data is fetched
  useEffect(() => {
    if (products) setProducts(products);
  }, [products, setProducts]);

  useEffect(() => {
    if (categories) setCategories(categories);
  }, [categories, setCategories]);

  if (productsError || categoriesError) {
    return (
      <div className="error">
        Error: {productsError?.message || categoriesError?.message}
      </div>
    );
  }

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          {loadingCategories ? (
            <Skeleton type="categories" />
          ) : (
            <Category categories={categories} />
          )}
          {loadingProducts ? (
            <>
              <Skeleton type="title" />
              <Skeleton type="products" />
            </>
          ) : (
            <Products headingText="Popular Products" products={products} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
