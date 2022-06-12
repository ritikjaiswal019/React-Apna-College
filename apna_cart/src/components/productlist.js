import React from 'react';
import Product from './Product.js'

export default function productlist(props) {
// export default function productlist({products}) {
    
  return (
    props.productList.length>0?
    props.productList.map((product, i)=>{
      return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} index={i} removeItem={props.removeItem}/>
    })
    : <h1>No Products Exist in the cart.</h1>
  )
}
