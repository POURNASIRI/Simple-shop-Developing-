import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

function Bredcrums({Product}) {
   
  return (
    <div className='breadcrums'>
         SHOP <img src={arrow_icon} alt="" /> {Product.category} <img src={arrow_icon} alt="" /> {Product.name}
    </div>
  )
}

export default Bredcrums