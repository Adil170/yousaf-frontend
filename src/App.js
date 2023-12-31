import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Products from './components/Products';
import ProductDetail from './screens/ProductDetail';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import ContactUs from './screens/ContactUs';

function App() {
  return (

    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/:productId' element={<ProductDetail/>} />
      
      <Route path='/cart' element={<Cart/>} />
      
      <Route path='/Checkout' element={<Checkout/>} />
      <Route path='/contectus' element={<ContactUs/>} />
      

      

    </Routes>
    </>
  );
}

export default App;
