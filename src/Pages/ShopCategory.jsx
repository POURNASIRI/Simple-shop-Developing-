import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopeContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'


function ShopCategory({category,banner}) {
    const {all_product} = useContext(ShopeContext)
      console.log(all_product)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={banner} alt="" />
      <div className="shopecategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
            Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
          {
            all_product.map(items=>{
              if(items.category === category){
                  return <Item
                  key={items.id}
                  {...items}
                  />
              }
            })
          }
      </div>
      <div className="shopecategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory