import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assets/data'
import Item from '../../Components/Item/Item'

function RelatedProduct({id}) {

  return (
    <div className='relatedProduct'>
        <h1>Telated Products</h1>
        <hr />
        <div className="relatedProduct-item">
            {
                data_product.map(items=>(
                    items.id !== id ?
                    <Item key={items.id} {...items}/>
                    : null
                ))
            }
        </div>
    </div>
  )
}

export default RelatedProduct