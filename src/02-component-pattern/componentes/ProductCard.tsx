import { createContext, CSSProperties, ReactElement } from 'react';
import { UseProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValue, ProductCardHandlers } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';



export interface Props {
  product: Product,
  // children?:  ReactElement | ReactElement[],
  children: ( args: ProductCardHandlers ) => JSX.Element
  className?: string ,
  style?: CSSProperties,
  onChange?: ( args: onChangeArgs )=> void,
  value?: number,
  initialValue?: InitialValue,
}

export const ProductContext = createContext({} as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange, value, initialValue }:Props) => {

    const {counter, increaseBy, maxCount, isMaxReached, reset } = UseProduct({ onChange, product, value, initialValue }); 


  return (
    <Provider value={{
      counter,
      increaseBy,
      product,
      maxCount,
    }}>
      <div 
        className={`${ styles.productCard } ${ className }`}
        style={ style }>

        { 
        children({
          count: counter,
          isMaxReached,
          maxCount,
          product,
          reset,
          increaseBy

        }) 
        }

      </div>
    </Provider>
  )
}



