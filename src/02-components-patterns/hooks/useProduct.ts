import React, { useEffect, useRef, useState } from 'react'
import { Product, onChangeArgs } from '../interfaces/ProductInterfaces/interfaces';

interface useProductArgs{
  product:Product;
  onChange?: (args:onChangeArgs) => void;
  value?:number
}


export const useProduct = ({ onChange, product, value = 0 }:useProductArgs) => {


  
  const [counter, setCounter] = useState(value)
    
  const isControlled = useRef( !!onChange )
  
  const increaseBy = ( value:number ) => {
      console.log("🚀 ~ file: useProduct.ts ~ line 18 ~ useProduct ~ isControlled", isControlled.current)
      
      if(isControlled.current){
        return onChange!({count: value, product})
      }
      const newValue = Math.max( counter + value, 0 )
      setCounter(newValue)
      onChange && onChange( {count:newValue, product })
    }

    useEffect(() => {
      setCounter(value)
    }, [value])
    

  return (
    {
        increaseBy,
        counter
    }
  )
}
