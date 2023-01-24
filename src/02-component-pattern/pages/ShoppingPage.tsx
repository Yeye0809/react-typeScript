import {ProductButtons, ProductCard, ProductImg, ProductTitle} from "../componentes";
import '../styles/custom-style.css';


const product = {
  id: '1',
  title: 'coffe mug -',
  img: './coffee-mug.png',
}

const ShoppingPage = () => {
  return (
    <div>
        <h1>Shoppign store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>

          <ProductCard 
            product={ product }
            className='bg-dark text-white'>

             <ProductCard.Img className='custom-image'/>
             <ProductCard.Title title={'Cafe con leche'} className='text-bold'/>
             <ProductCard.Buttons className='custom-buttons' />
             
          </ProductCard> 

          <ProductCard 
            product={ product }
            className='bg-dark text-white'>

             <ProductImg className='custom-image'/>
             <ProductTitle className='text-bold'/>
             <ProductButtons className='custom-buttons' />
             
          </ProductCard>

          <ProductCard 
            product={ product }
            style={{
              background: '#70D1f8'
            }}
            >

             <ProductImg style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'}}/>
             <ProductTitle style={{ fontWeight: 'bold' }}/>
             <ProductButtons style={{
              display: 'flex',
              justifyContent: 'end',
             }}/>
             
          </ProductCard>
          
        </div>
    </div>
  )
}

export default ShoppingPage
