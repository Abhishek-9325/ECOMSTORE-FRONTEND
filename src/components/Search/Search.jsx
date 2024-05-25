import React, { useState, useEffect } from "react";
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

  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // Adjust debounce delay as needed (e.g., 300 milliseconds)

    return () => {
      clearTimeout(timeoutId); // Clear timeout on every query change
    };
  }, [query]);

  let { data } = useFetch(`/api/products/search?query=${debouncedQuery}`);

  if (!debouncedQuery.length) {
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
                <img src={item.productImage} alt={item.title} />
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
