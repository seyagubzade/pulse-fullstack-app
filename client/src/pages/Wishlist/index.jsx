import React from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../store/wishlist/wishlistSlice";
import { Helmet } from "react-helmet";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlist, loading, error } = useSelector((state) => state.wishlist);

  return (
    <div style={{paddingTop: "120px"}}>
        <Helmet title="Wishlist" />
      <section className="h-100 h-custom" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">Wishlist</h1>
                          <h6 className="mb-0 text-muted">{wishlist.length} items</h6>
                        </div>
                        <hr className="my-4" />

                        {wishlist?.map((prod) => (
                          <div
                            key={prod._id}
                            className="row mb-4 d-flex justify-content-between align-items-center"
                          >
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src={prod.img}
                                className="img-fluid rounded-3"
                                alt={prod.title}
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-muted">{prod.title}</h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                              <h6 className="text-black mb-0">${prod.price} per item</h6>

                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <button
                                className="btn btn-link text-muted"
                                onClick={() => dispatch(removeFromWishlist(prod._id))}
                              >
                                <i className="fas fa-times"></i>
                              </button>
                            </div>
                          </div>
                        ))}

                        <div className="pt-5">
                          <h6 className="mb-0">
                            <a href="/" className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2"></i>
                              Back to shop
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4"
                      style={{ backgroundColor: "#f5f5f5" }}
                    >
                      <div className="p-5">
                        {/* Similar summary section as in the Basket component */}
                        {/* ... */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
