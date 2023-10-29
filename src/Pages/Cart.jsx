import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
  const state = useSelector(state => state.cart.cart)
  return (
    <div className='cart'>
       {
          state.map(item=>(
            <div className='cartItems'>
                <img src="" alt="" />
                <div className="price"></div>
                
            </div>
          ))
       }
    </div>
  )
}

export default Cart