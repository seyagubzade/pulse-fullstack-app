import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Wishlist from "../pages/Wishlist";
import Add from "../pages/Add";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <Header />
      <StyledContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/add-new" element={<Add />} />

          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </StyledContainer>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

const StyledContainer = styled.div`
`;

export default Layout;
