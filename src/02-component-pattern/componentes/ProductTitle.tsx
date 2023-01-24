import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';


interface Props {
  className?: string,
  title?: string, 
  style?: CSSProperties,
}

export const ProductTitle = ({  className, title, style }:Props ) => {
    const {product} = useContext(ProductContext);
    let titleToShow: string
  
    (title) ? titleToShow = title : titleToShow = product.title
  
    return (
      <span 
        className={`${styles.productDescription} ${ className}`}
        style={ style }>
          { titleToShow }</span>
  
    )
  }