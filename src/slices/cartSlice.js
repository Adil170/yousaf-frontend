import { createSlice } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  cartItem: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: " cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        state.cartItem[existingIndex].cartQuantity += 1;
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(tempProduct);
        toast.success(`${action.payload.name} to cart`, {
          position: "bottom-left",
        });
      }
    },
    removeFromCart(state, action) {
      const nextToCart = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItem = nextToCart;

      toast.error("Removed from Cart", {
        position: "bottom-left",
      });
    },
    decreaseCartQuantity(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
        toast.info("decrese cart quantity", {
          position: "bottom-left",
        });
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        const nextCartItem = state.cartItem.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItem = nextCartItem;

        toast.info("product remove from cart");
      }
    },
    clearCart(state , action ){
      state.cartItem = [];
      toast.error("Cart cleared", { position: "bottom-left" })
    },
    getTotel(state, action){
       let {total ,quantity} = state.cartItem.reduce((cartTotel ,cartItem) => {
        const {price ,cartQuantity} = cartItem;
        const itemTotal = price * cartQuantity ;

        cartTotel.total += itemTotal;
        cartTotel.quantity += cartQuantity
        return cartTotel;
      },{
        total : 0,
        quantity : 0
      })
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    }
  },
});
export const { addToCart, removeFromCart, decreaseCartQuantity,clearCart ,getTotel} =
  cartSlice.actions;

export default cartSlice.reducer;
