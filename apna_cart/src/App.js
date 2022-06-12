// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/navbar";
import ProductList from "./components/productlist.js";
import React, { useState } from "react";
import Footer from "./components/footer.js";
import AddItem from "./components/addItem.js";

function App() {
  const products = [
    {
      price: 10000,
      name: "Iphone X",
      quantity: 0,
    },
    {
      price: 25000,
      name: "Redmi Note 10 Pro",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, settotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
    let newTotalAmount = totalAmount;
    newTotalAmount += newProductList[index].price;
    settotalAmount(newTotalAmount);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newTotalAmount -= newProductList[index].price;
      newProductList[index].quantity--;
    }
    // newProductList[index].quantity = newProductList[index].quantity > 0 ? newProductList[index].quantity - 1 : 0;
    setProductList(newProductList);
    settotalAmount(newTotalAmount);
  };

  const resetCart = () => {
    let newProductList = [...productList];
    newProductList.forEach((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    settotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].price * newProductList[index].quantity;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    settotalAmount(newTotalAmount); 
  };

  const addNewItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0,
    })
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar productList={productList}/>
      <main className="container mt-5">
        <AddItem addNewItem={addNewItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetCart={resetCart} />
    </>
  );
}

export default App;
