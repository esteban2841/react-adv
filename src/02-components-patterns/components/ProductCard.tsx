import React, { createContext, ReactElement, CSSProperties } from 'react'
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg"
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/ProductInterfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props{
    product: Product
    children?: ReactElement | ReactElement[]
    className?: string;
    style?: CSSProperties
}

export const ProductCard = ({ product, children, className, style }: Props) => {

    const {counter, increaseBy} = useProduct()

  return (
    <Provider value={{
        counter, 
        increaseBy,
        product
    }}>

        <div 
            className={`${styles.productCard} ${className}`}
            style={ style }
        >

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


