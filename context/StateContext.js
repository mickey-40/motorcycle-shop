import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast'
import product from "../green-gnat/schemas/product";

const Context = createContext();

export const StateContext = ({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  
  const onAdd = (product, quantity) => {
    const ckeckProductInCart = cartItems.find((item)=> item._id === product._id);
    
    if (ckeckProductInCart) {
      // setTotalPrice((prevTotalPrice) => prevTotalPrice +product.price * quantity);
      // setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
      
      const updatedCartItems = cartItems.map((cartProduct)=>{
        if (cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity
        }
      })

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }])
    }
    toast.success(`${qty} ${product.name} added to the cart.`);
    setTotalPrice((prevTotalPrice) => prevTotalPrice +product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    {console.log(totalQuantities)}
  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }
  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
      return prevQty - 1
    });
  }
  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd
      }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);