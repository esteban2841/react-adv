import React, { useState } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import "../styles/custom-styles.css";


export const ShoppingPage = () => {
  const product = products[0]
  return (
    <div >
        <h1>ShoppingPage</h1>
        <hr />
  

       
        <ProductCard 
          key={product.id}
          product={product}
          className='bg-dark' 
          initialValues={{
            count:4,
            maxCount:10
          }}
        >
          {
            ( {reset, isMaxCountReached, increaseBy,count} )=>{
              return (

              <>
                <ProductImage className='custom-image'/>
                <ProductTitle  className={"color-white"}/>
                <ProductButtons className='custom-buttons' />

                <button onClick={reset}>Reset</button>
                {!isMaxCountReached ? <button onClick={()=>increaseBy(-2)}>-2</button>:null}
                {!isMaxCountReached ? <button onClick={()=>increaseBy(+2)}>+2</button>:null}
                <span>{count}</span>
              </> 
              )
            }
            
          }
        </ProductCard>
        
      
    </div>
  )
}
