import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


function Item({name,image,new_price,old_price,id}) {
  return (

    <div className='item'>
      <Link to={`/product/${id}`}><img onClick={window.scroll(0,0)} src={image} alt="" /></Link>
        <p>{name}</p>
        <div className="i">
            <div className="i">
                ${new_price}
            </div>
            <div className="i">
                ${old_price}
            </div>
        </div>
    </div>
  )
}

export default Item