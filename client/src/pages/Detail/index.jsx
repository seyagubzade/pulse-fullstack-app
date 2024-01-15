import React, { useEffect } from "react";
import "./styles.scss";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { DeleteById, GetById } from "../../store/menu/api_actions";
import toast from 'react-hot-toast';
import { addToWishlist } from "../../store/wishlist/wishlistSlice";
import { Helmet } from "react-helmet";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, currentMenuItem, error } = useSelector((state) => state.menu);
    const navigate = useNavigate()
  const geProdById = async () => {
    dispatch(GetById(id));
  };
  useEffect(() => {
    geProdById();
  }, [id]);
  return (
    <div className="detail container">
        <Helmet title="Product detail" />
      {loading ? (
        <p>Loading</p>
      ) : currentMenuItem ? (
        <div className="card mb-3" style={{ maxWidth: "540px;" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={currentMenuItem.img} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{currentMenuItem.title}</h5>
                <h5 className="card-title">{currentMenuItem.ingredient}</h5>
                <p className="card-text">
                  {currentMenuItem.desc}
                </p>
                <p className="card-text">
                 Price: ${currentMenuItem.price}
                </p>
                <div className="actions">
                    <button className="btn btn-outline-dark " onClick={()=>{
                        dispatch(DeleteById(currentMenuItem._id))
                        toast.success('Item deleted!');
                        navigate('/')
                    }}>Delete</button> {" "}
                    <button className="btn btn-dark" onClick={()=>dispatch(addToWishlist(currentMenuItem))}>Add to Wishlist</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
};

export default Detail;
