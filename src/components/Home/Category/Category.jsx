import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.map((item) => (
          <div
            key={item._id}
            className="category"
            onClick={() => navigate(`/category/${item._id}`)}
          >
            <img src={item.categoryImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
