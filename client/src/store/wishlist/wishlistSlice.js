import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState: {
    wishlist: localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : [],
    loading: false,
    error: null,
  },
  reducers: {
    addToWishlist: (state, action) => {
      const wishlistArray = JSON.parse(JSON.stringify([...state.wishlist]));
      const { title, desc, ingredient, price, img, _id } = action.payload;
      const doesExist = wishlistArray.find(
        (element) => element._id === action.payload._id
      );
      console.log("doesExist>>", doesExist);
      if (doesExist) {
        toast.error("Already exists in your wishlist!");
      } else {
        state.wishlist = [
          ...wishlistArray,
          { title, desc, ingredient, price, img, _id },
        ];
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        toast.success("Item added to wishlist");
      }
    },
    removeFromWishlist: (state, action) => {
      let newArr = localStorage.getItem("wishlist")
        ? JSON.parse(localStorage.getItem("wishlist"))
        : [];
      const target = newArr.find((element) => element._id == action.payload);
      const indexOfTarget = newArr.indexOf(target);

      newArr.splice(indexOfTarget, 1);
      state.wishlist = newArr;
      toast.success("Item removed from wishlist");
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export const wishlistReducer = wishlistSlice.reducer;
