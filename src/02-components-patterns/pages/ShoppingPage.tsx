import React from 'react'
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';


const product = {
  id:"1",
  title: "Coffee dynamic",
  img:""
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />
        <div style={{
          display:"flex",
          flexDirection:"row",
          flexWrap: "wrap"
        }}>
          <ProductCard product={product}>
            <ProductCard.Image/>
            <ProductCard.Title title="que gono" />
            <ProductCard.Buttons />
          </ProductCard>


          <ProductCard product={product}>
            <ProductImage/>
            <ProductTitle  title="Hola todo"/>
            <ProductButtons />
          </ProductCard>

        </div>
    </div>
  )
}
