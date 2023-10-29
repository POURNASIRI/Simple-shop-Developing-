import React, { useContext } from 'react'
import { ShopeContext } from '../Context/ShopContext'
import Bredcrums from '../Components/Breadcrums/Bredcrums'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Description from '../Components/Description/Description'
import RelatedProduct from '../Components/RelatedProducts.jsx/RelatedProduct'
import data_product from '../Components/Assets/data'

function Product() {
  const {all_product} = useContext(ShopeContext)
  const {id} = useParams()
  const product = all_product.find((e)=>e.id === Number(id))
  

  return (
    <div className='Product'>
        <Bredcrums Product={product}/>
        <ProductDisplay Product={product} />
        <Description/>
        <RelatedProduct id={id}/>
    </div>
  )
}

export default Product