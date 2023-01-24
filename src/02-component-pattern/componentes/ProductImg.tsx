import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';


interface Props {
  className?: string,
  img?: string,
  style?: CSSProperties,

}

export const ProductImg = ({ img, className, style }:Props ) => {
    const { product } = useContext(ProductContext);
  
    let imageShow: string;
  
    if( img ){
      imageShow = img;
    }else if( product.img ){
      imageShow = product.img;
    }else{
      imageShow = noImage
    }
   
  
    return (
      <img 
        className={ `${ styles.productImg } ${ className }` } src={ imageShow } alt="product " 
        style={ style }/>
  
    )
  }