import { useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from "../styles/styles.module.css";

export interface ProductButtonsProps{
    className?: string;
}

export const ProductButtons = ({ className } : ProductButtonsProps) => {

    const { increaseBy, counter, maxCount} = useContext( ProductContext )

    function isMaxReached (){
        return maxCount && maxCount === counter ? true :false
    }
    const isMaximumValueReached = useCallback(() => isMaxReached(),[counter, maxCount])

    return (
        
        <div className={`${styles.buttonsContainer} ${className}`}>
            
            <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>
            
            <div className={styles.countLabel}>{counter}</div>
            
            <button className={ `${styles.buttonAdd} ${isMaximumValueReached()&& styles.disable  }`} onClick={()=>increaseBy(1)}>+</button>
        </div>
    )
}