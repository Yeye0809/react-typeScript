import {ProductButtons, ProductCard, ProductImg, ProductTitle} from "../componentes";
import '../styles/custom-style.css';

import { products } from "../data/products";


const product = products[0];

const ShoppingPage = () => {



  return (
    <div>
        <h1>Shoppign store</h1>
        <hr />

            <ProductCard 
              key={ product.id }
              product={ product }
              initialValue= {{
                count: 4,
                maxCount: 12
              }}
              className='bg-dark text-white'
            >
              {
                ({ reset, increaseBy, isMaxReached, maxCount, count })=>(
                  <>
                    <ProductImg className='custom-image'/>
                    <ProductTitle className='text-bold'/>
                    <ProductButtons className='custom-buttons' />
                    <button onClick={ reset }>reset</button>
                    <button onClick={()=> increaseBy(-2) }>-2</button>
                    {
                      ( !isMaxReached && <button onClick={()=> increaseBy(+2)}>+2</button>)
                    }
                    <span>{count} - {maxCount}</span>
                    
                  </>
                )
              }

              
              
            </ProductCard>   
       
          
    </div>
  )
}

export default ShoppingPage
