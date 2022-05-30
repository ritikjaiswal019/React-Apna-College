// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/productlist.js'
import React, {useState} from 'react';
// import Footer from './components/footer.js'

function App() {
  const products = [
    {
      price:9999,
      name: "Iphone X",
      quantity: 0,
    },
    {
      price:9999,
      name: "Redmi Note 10 Pro",
      quantity: 0,
    },
  ]

  let [productList, setProductList] = useState(products);
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  }
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity = newProductList[index].quantity > 0 ? newProductList[index].quantity - 1 : 0;
    setProductList(newProductList);
  }

  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
    <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
    </main>
    {/* <Footer/> */}
    </>
  );
}

export default App;
