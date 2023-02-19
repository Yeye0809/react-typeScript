import {ProductButtons, ProductCard, ProductImg, ProductTitle} from "../componentes";
import { products } from "../data/products";
import '../styles/custom-style.css';




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
            >
              {
                ({ reset, increaseBy, isMaxReached, maxCount, count })=>(
                  <>
                    <ProductImg />
                    <ProductTitle />
                    <ProductButtons />
                    
                  </>
                )
              }

              
              
            </ProductCard>   
       
          
    </div>
  )
}

export default ShoppingPage
