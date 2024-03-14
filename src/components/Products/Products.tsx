import React, { useEffect, useMemo, useState } from 'react';
import { getProducts } from '../../utils/productsApi/getProducts';
import { ProductType } from '../../types/ProductType';
import './Products.css';
import Product from '../Product/Product';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchProducts } from './productsSlice';

function Products() {

    const products = useAppSelector(state => state.products.value);

    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch])

  return (
    <section className='products'>
        <ul className='products_shopping-basket list-style'>
            {products?.slice(0,5).map(product => 
            (<Product
            category = {product.category}
            description={product.description}
            key={product.id}
            image={product.image}
            price={product.price}
            rating={product.rating}
            title={product.title}    
            id={product.id}
            ></Product>))}
        </ul>
        <div className='products_total-cost'>Общая стоимость:</div>
    </section>
  );
}

export default Products;
