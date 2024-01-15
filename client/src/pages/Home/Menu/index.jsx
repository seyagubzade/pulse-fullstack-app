import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { DeleteById, GetAll } from "../../../store/menu/api_actions";
import { Link } from "react-router-dom";
import { addToWishlist } from "../../../store/wishlist/wishlistSlice";
import toast from "react-hot-toast";

const Menu = () => {
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { menu, loading, error } = useSelector((state) => state.menu);

  const getAll = async () => {
    dispatch(GetAll());
  };
  useEffect(() => {
    getAll();
  }, []);
  useEffect(() => {
    setFilteredData(() =>
      menu.filter((prod) =>
        prod.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [menu, searchValue]);
  return (
    <div className="our-menu">
      <div className="container">
        <div className="welcome-header">
          <i class="fa-thin fa-bell-concierge"></i>
          <h3>Our Menu</h3>
        </div>
        <div className="menu-content">
          <div className="menu-filter">
            <div className="search-form">
            <i class="fa-light fa-magnifying-glass"></i>
              <input type="text" placeholder="Search" value={searchValue} onChange={(e)=>setSearchValue(e.target.value.trim())}/>
            </div>
          </div>
          <div className="row">
            {loading ? (
              <p>Loading</p>
            ) : filteredData ? (
              filteredData.map((item) => {
                return (
                  <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="menu-item">
                      <div className="item-header">
                        <Link to={`/detail/${item._id}`}>
                          <h3 className="title">{item.title}</h3>
                        </Link>
                      </div>
                      <div className="item-body">
                        <span className="ingredients">{item.ingredient}</span>
                        <span className="dots"></span>
                        <span className="price">
                          ${parseFloat(item.price).toFixed(2)}
                        </span>
                      </div>
                      <div
                        className="btn btn-outline-light"
                        onClick={() => {
                          dispatch(DeleteById(item._id));
                          toast.success("Item deleted");
                        }}
                      >
                        Delete
                      </div>
                      {" "}
                      <div
                        className="btn btn-outline-light"
                        onClick={() => {
                          dispatch(addToWishlist(item));
                        }}
                      >
                        Add to wishlist
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>Not Found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
