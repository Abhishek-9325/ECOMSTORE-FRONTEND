import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./Category.scss";
import Skeleton from "../skeleton-loading/Skeleton";

const Category = ({ categoryId }) => {
  const { id } = useParams();
  const actualId = id || categoryId;
  const {
    data: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useFetch(`/api/categories/${actualId}`);
  const {
    data,
    loading: productsLoading,
    error: productsError,
  } = useFetch(`/api/categories/products/${actualId}`);

  if (categoryError || productsError) {
    return (
      <div className="error">
        Error: {categoryError?.message || productsError?.message}
      </div>
    );
  }

  return (
    <div className="category-main-content">
      <div className="layout">
        {categoryLoading ? (
          <Skeleton type="title" />
        ) : (
          <div className="category-title">{categoryData?.title}</div>
        )}
        {productsLoading ? (
          <Skeleton type="products" />
        ) : (
          <Products products={data} />
        )}
      </div>
    </div>
  );
};

export default Category;
