import React, { useState } from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import "../styles/custom-styles.css";


export const ShoppingPage = () => {

  const {onProductCountChange, shoppingCart} = useShoppingCart()

  return (
    <div >
        <h1>ShoppingPage</h1>
        <hr />
        <div style={{
          display:"flex",
          flexDirection:"row",
          flexWrap: "wrap"
        }}> 

        {
          products.map ( product => {
            return (
            
            <ProductCard 
              key={product.id}
              product={product}
              value={shoppingCart[product.id]?.count || 0}
              className='bg-dark' 
              onChange={ (event)=>onProductCountChange(event) }
            >
              <ProductImage className='custom-image'/>
              <ProductTitle  className={"color-white"}/>
              <ProductButtons className='custom-buttons' />
            </ProductCard>
          )})
        }
        </div>

        <div className={"shopping-cart"}>

        {
          Object.entries(shoppingCart).map(([key,product])=>{
              
            return(
              <ProductCard 
                key={key}
                product={product}
                className='bg-dark' 
                style={{
                  width:"100px"
                }}
                value={product.count}
                onChange={ (event)=>onProductCountChange(event) } 
              >
                <ProductImage className='custom-image'/>
                <ProductTitle  className={"color-white"}/>
                <ProductButtons className='custom-buttons' />
              </ProductCard>
            
            )
          })          
              
          
        }
        </div>
    </div>
  )
}
