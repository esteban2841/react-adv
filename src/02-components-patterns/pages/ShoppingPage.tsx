import React, { useState } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';


export const ShoppingPage = () => {
  const product = products[0]
  return (
    <div >
        <h1>ShoppingPage</h1>
        <hr />
  

       
        <ProductCard 
          key={product.id}
          product={product}
          initialValues={{
            count:4,
            maxCount:10
          }}
        >
          {
            ( {reset, isMaxCountReached, increaseBy,count} )=>{
              return (

              <>
                <ProductImage />
                <ProductTitle  />
                <ProductButtons />

              </> 
              )
            }
            
          }
        </ProductCard>
        
      
    </div>
  )
}
