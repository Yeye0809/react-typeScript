import { createContext } from 'react';
import { UseProduct } from '../hooks/useProduct';
import { ProductContextProps, ProductsProps } from '../interfaces/interfaces';

import style from '../styles/styles.module.css';



export const ProductContext = createContext({} as ProductContextProps );
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }:ProductsProps) => {

    const {counter, increaseBy} = UseProduct();


  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div className={ style.productCard }>

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

