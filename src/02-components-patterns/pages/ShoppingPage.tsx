import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import "../styles/custom-styles.css";

const product = {
  id:"1",
  title: "Coffee dynamic",
  img:""
}

export const ShoppingPage = () => {
  return (
    <div >
        <h1>ShoppingPage</h1>
        <hr />
        <div style={{
          display:"flex",
          flexDirection:"row",
          flexWrap: "wrap"
        }}>
          <ProductCard product={product} className='bg-dark'>
            <ProductCard.Image className='custom-image'/>
            <ProductCard.Title title="que gono" className={"color-white"}/>
            <ProductCard.Buttons className='custom-buttons'/>
          </ProductCard>


          <ProductCard 
            product={product}
            className='bg-dark' 
          >
            <ProductImage className='custom-image'/>
            <ProductTitle  title="Hola todo" className={"color-white"}/>
            <ProductButtons className='custom-buttons' />
          </ProductCard>

          <ProductCard 
            product={product}
            style={{
              backgroundColor:"#70D1F8",
            }}
          >
            <ProductImage />
            <ProductTitle  />
            <ProductButtons />
          </ProductCard>
        </div>
    </div>
  )
}
