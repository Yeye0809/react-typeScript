import {ProductButtons, ProductCard, ProductImg, ProductTitle} from "../componentes";
import '../styles/custom-style.css';

import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";



const ShoppingPage = () => {

  const { onProductCountChange, shoppingCard } = useShoppingCart()


  return (
    <div>
        <h1>Shoppign store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>

       
        {
          products.map( product =>(
            <ProductCard 
              key={ product.id }
              product={ product }
              className='bg-dark text-white'
              onChange={ onProductCountChange }
              value={ shoppingCard[product.id]?.count || 0 }
            >

              <ProductImg className='custom-image'/>
              <ProductTitle className='text-bold'/>
              <ProductButtons className='custom-buttons' />
              
            </ProductCard>
          ))
        }
          
        </div>
        <div className='shopping-card'>

          {
            Object.entries(shoppingCard).map(([key, product]) => (
            <ProductCard 
                key={key}
                product={ product }
                className='bg-dark text-white'
                style={{ width: '100px'}}
                onChange={ onProductCountChange }
                value={ product.count }
              >
                <ProductImg className='custom-image'/>
                <ProductButtons className='custom-buttons' />
              </ProductCard>
            ))
          }
        </div>
          
    </div>
  )
}

export default ShoppingPage
