import React, { useEffect, useMemo, useState } from 'react';
import { ProductType } from '../../types/ProductType';
import './Product.css';



function Product({ description,image,price,rating,title }:ProductType) {


  
  const [amount, setAmount] = useState(1);

  function amountIncrement() {
    setAmount(state => state + 1);
  }

  function amountDecrement() {
    if(amount > 1) {
      setAmount(state => state - 1);
    }
  }

  function deleteProduct() {
    //возможно тут надо редаксом изменить состояние массива с продуктами
  }

  return (
    <li className='product'>
        <img className='product_image' src={image}></img>
        <h3 className='product_title'>{`Наименование: ${title}`}</h3>
        <button className='product_trash' onClick={deleteProduct}></button>
        <p className='product_description'>{`Описание: ${description}`}</p>
        <p className='product_price'>{`Цена: ${price * 90} руб.`}</p>
        <p className='product_rating'>{`Рейтинг: ${rating.rate} баллов, На основе ${rating.count} отзывов`}</p>
        <div className='product_amount'>
            <button className='product_amount-button' onClick={amountDecrement}>-</button>
            <p>{amount}</p>
            <button className='product_amount-button' onClick={amountIncrement}>+</button>

        </div>
    </li>
  );
}

export default Product;
