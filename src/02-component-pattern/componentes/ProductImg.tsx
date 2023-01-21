import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import style from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';


export const ProductImg = ({ img = '' }) => {
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
      <img className={ style.productImg } src={ imageShow } alt="product " />
  
    )
  }