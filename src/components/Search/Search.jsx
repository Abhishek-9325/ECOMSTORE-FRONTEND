import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Search = ({ setSearchModal }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  let { data } = useFetch(`/api/products/search?query=${query}`);

  if (!query.length) {
    data = null;
  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          type="text"
          placeholder="Search for products"
          value={query}
          onChange={onChange}
        />
        <MdClose className="close-btn" onClick={() => setSearchModal(false)} />
      </div>
      <div className="search-result-content">
        {!data?.length && (
          <div className="start-msg">
            Start typing to see products you are looking for.
          </div>
        )}
        <div className="search-results">
          {data?.map((item) => (
            <div
              className="search-result-item"
              key={item._id}
              onClick={() => {
                navigate("/product/" + item._id);
                setSearchModal(false);
              }}
            >
              <div className="image-container">
                <img src={item.productImage} />
              </div>
              <div className="prod-details">
                <span className="name">{item.title}</span>
                <span className="desc">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
