
  
export interface Product {
    id: string,
    title: string,
    img?: string
  }
  
export interface ProductContextProps {
    counter: number,
    increaseBy: (value:number) => void,
    product: Product,
    maxCount?: number
  }

  export interface onChangeArgs {
    product: Product,
    count: number,
  }

  export interface ProductInCard extends Product {
    count: number 
  }

  export interface InitialValue {
    count?: number,
    maxCount?: number,
  }

  export interface ProductCardHandlers {
    count: number,
    isMaxReached: boolean,
    maxCount?: number,
    product: Product,
    increaseBy: (value: number) => void,
    reset: () => void,

  }