import { useState } from 'react';
import { ProductInCard, Product } from '../interfaces/interfaces';


  
export  const useShoppingCart = () => {

     const [ shoppingCard, setShoppingCard ] = useState<{ [key:string]: ProductInCard }>({});

     const onProductCountChange = ({count, product}: {count: number, product: Product})=>{
      console.log({count});

      /* eliminar producto del carrito */
      setShoppingCard( oldShopingCard => {

        const productInCard: ProductInCard = oldShopingCard[product.id] || { ...product, count: 0 }

        if( Math.max( productInCard.count + count, 0) > 0 ){
          productInCard.count += count;
            return{
              ...oldShopingCard,
              [product.id]: productInCard
            }
        }

        //BORRAR EL PRODUCTOS 
        const { [product.id]: toDelete, ...rest} = oldShopingCard;
            return rest

      //   if( count === 0 ){
      //     const { [product.id]: toDelete, ...rest} = oldShopingCard;
      //     return rest
      //   }

      // /*agregar producto al carrito */
      //   return{
      //     ...oldShopingCard,
      //     [ product.id ]: { ...product, count }
      //   }
      })

  }
   
  return {
    shoppingCard,
    onProductCountChange
  }
}
  
 