// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/productlist.js'
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
  return (
    <>
    <Navbar/>
    <ProductList products={products}/>
    {/* <Footer/> */}
    </>
  );
}

export default App;
