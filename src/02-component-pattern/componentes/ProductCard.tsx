import { createContext, CSSProperties, ReactElement } from 'react';
import { UseProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';



export interface Props {
  product: Product,
  children?:  ReactElement | ReactElement[],
  className?: string ,
  style?: CSSProperties,
  onChange?: ( args: onChangeArgs )=> void,
  value?: number,
}

export const ProductContext = createContext({} as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange, value }:Props) => {

    const {counter, increaseBy} = UseProduct({ onChange, product, value }); 


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

