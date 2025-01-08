/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
"use client";

import React, { useState } from "react"
import ProductDetail from "./Components/ProductDetail";

import { MdMenuOpen } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart"
import ShoppingCart from "./pages/ShoppingCart"
const App: React.FC = () => {
  return (
    <div>
     <Home/> 
     <ProductListing/>

<Cart/>

<ShoppingCart/>
<About/>

    
    </div>
  );
};

export default App;
