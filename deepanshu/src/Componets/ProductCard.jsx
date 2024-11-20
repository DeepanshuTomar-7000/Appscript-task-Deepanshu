import React from 'react';
import "./ProductCard.css";

const ProductCard = ({product}) => {

  //console.log("product",product)

  return (
    <div className='productCard transition-all cursor-pointer'>
      <div className='image image-container'>
        <img className='object-cover object-left-top rounded-[1rem]' src={product.imageUrl} alt={"alt"} />
      </div>
    <div className='textPart rounded-[1rem] bg-white p-3'>
        <div>
            <p className=' font-bold opacity-60'>{product.productName}</p>
        </div>
        <div className='flex items-center justify-around space-x-2'>
            <p className=' font-semibold'>₹{product.status}</p>
        </div>
    </div>

    </div>
  )
}

export default ProductCard;