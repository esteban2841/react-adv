import React, { createContext } from 'react'
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg"
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/ProductInterfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

 
export const ProductCard = ({ product, children }: ProductCardProps) => {

    const {counter, increaseBy} = useProduct()

  return (
    <Provider value={{
        counter, 
        increaseBy,
        product
    }}>

        <div className={styles.productCard}>

        {children}

            {/* <ProductImage img={product.img}/>

            <ProductTitle title={product.title}/>
            
            <ProductButtons 
                increaseBy={increaseBy} 
                counter={counter}
            /> */}
    
        </div>
    </Provider>
  )
}


