import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import{useDispatch} from 'react-redux'
import { addtoCart } from '../../redux/cartSlice'

function ProductDisplay({Product}) {
    const {name,image,category,new_price,old_price} = Product

    const dispatch = useDispatch()
  return (
    <div className='ProductDisplay'>
        <div className="display-left">
            <div className="display-left-img-list">
                <img src={image} alt="" />
                <img src={image} alt="" />
                <img src={image} alt="" />
                <img src={image} alt="" />
            </div>
            <div className="display-img">
                <img className='product-main-img' src={image} alt="" />
            </div>
        </div>
        <div className="display-right">
                <h1>{name}</h1>
                <div className="display-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <p>(122)</p>
                </div>
            <div className="product-right-prices">
                <p className="old-price">${old_price}</p>
                <p className="new-price">${new_price}</p>
            </div>
            <p className="right-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea blanditiis incidunt suscipit totam, nemo minima soluta, expedita voluptas ad, voluptate at sequi labore. Rem molestiae fuga autem adipisci. Aut dicta fuga obcaecati assumenda, temporibus suscipit tenetur et maiores quae odit.
            </p>
            <div className="product-right-size">
                <h1>Select Size</h1>
                <ul className="product-right-sizes">
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                    <li>XXL</li>
                </ul>
            <button onClick={()=>dispatch(addtoCart({name,image,new_price}))}>ADD TO CART</button>
            <p className='product-right-category'><span>Category : </span> Women , T-shirt , crop Top</p>
            <p className='product-right-category'><span>Tags : </span>Modern , Latest</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay