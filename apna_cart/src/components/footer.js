import React from 'react'

export default function footer(props) {
    // console.log(props.totalAmount)
  return (
    <div className='row fixed-bottom'>
        <button className="btn btn-danger col-2" onClick={()=>{props.resetCart()}}>Reset</button>
        <div className='col-8 bg-dark text-light text-center'>{props.totalAmount}</div>
        <button className="btn btn-outline-primary col-2">Pay Now</button>
    </div>
  )
}
