import { createContext, CSSProperties, ReactElement } from 'react';
import { UseProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';



export interface Props {
  product: Product,
  children?:  ReactElement | ReactElement[],
  className?: string ,
  style?: CSSProperties,
}

export const ProductContext = createContext({} as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style }:Props) => {

    const {counter, increaseBy} = UseProduct(); 


  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div 
        className={`${ styles.productCard } ${ className }`}
        style={ style }>

        {
          children
        }

          {/* <ProductImg img={ product.img }/>

          <ProductTitle title={ product.title }/>

        <ProductButtons counter={counter} increaseBy={increaseBy}/> */}
      </div>
    </Provider>
  )
}


// ProductCard.Img = ProductImg;
// ProductCard.Title = ProductTitle;
// ProductCard.Buttons = ProductButtons;

