import {ProductButtons, ProductCard, ProductImg, ProductTitle} from "../componentes";


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

          <ProductCard product={ product }>
             <ProductCard.Img />
             <ProductCard.Title title={'Cafe con leche'}/>
             <ProductCard.Buttons />
             
          </ProductCard> 

          <ProductCard product={ product }>
             <ProductImg />
             <ProductTitle title={''}/>
             <ProductButtons />
             
          </ProductCard>
          
        </div>
    </div>
  )
}

export default ShoppingPage
