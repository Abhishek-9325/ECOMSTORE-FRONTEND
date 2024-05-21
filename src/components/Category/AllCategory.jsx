import useFetch from "../../hooks/useFetch";
import Category from "./Category";
import "./Category.scss";
const AllCategory = () => {
  const { data: categories } = useFetch(`/api/categories`);
  return (
    <div className="category-main-content">
      {categories?.map((item) => (
        <Category key={item._id} categoryId={item._id} />
      ))}
    </div>
  );
};

export default AllCategory;
