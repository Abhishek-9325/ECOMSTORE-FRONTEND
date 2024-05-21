import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./Category.scss";
const Category = ({ categoryId }) => {
  const { id } = useParams();
  const { data: categoryData } = useFetch(
    `/api/categories/${id ? id : categoryId}`
  );
  const { data } = useFetch(`/api/categories/products/${id ? id : categoryId}`);
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">{categoryData?.title}</div>
        <Products products={data} />
      </div>
    </div>
  );
};

export default Category;
