import React from 'react'
import './Popular.css'
import product from '../Assets/data'
import Item from '../Item/Item'

function Popular() {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular-item">
            {
                product.map(items=>(
                    <Item 
                    key={items.id}
                    {...items}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Popular