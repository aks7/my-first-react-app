import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import ProductList from './ProductList';
import ProductList1 from './ProductList1';
import AjaxCallTest from './AjaxCallTest';


function App() {
  const [cart, setCart] = useState({});
  function increaseQuantity(product) {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 0
      };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);  // if newCart is differernce reference then only react will reder the whole comp

  }

  function decreaseQuantity(product) {
    const newCart = { ...cart };
    if (newCart[product.id]) {
      newCart[product.id].quantity -= 1;

      if (newCart[product.id].quantity === 0) {
        delete newCart[product.id];
      }
    }
    setCart(newCart);  // if newCart is differernce reference then only react will reder the whole comp
  }


  return (
    <div className="App">
      <ProductList1 cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
      <AjaxCallTest cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
    </div>
  );
}

export default App;


// what are states in js
// what is mounting and unmounting
// what is useEffect
// what is virtual dom

//SEO (Search Engine Optimization)

// react is not se optimized, becasue html is created dynamically by the js and croller reads html,
// so google croller does not read it 
//and put it on pending list

//nextJs is used for making react se optimized

//props drilling-------------------
//passing parameter form parent to the last child by every level
