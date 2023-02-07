
import {useEffect, useRef, useState} from 'react';
import { onChangeArgs, Product, InitialValue } from '../interfaces/interfaces';

interface useProductArgs {
    onChange?: ( args: onChangeArgs ) => void,
    product: Product,
    value?: number,
    initialValue?: InitialValue,
}

export const UseProduct = ( { onChange, product, value = 0, initialValue }:useProductArgs ) => {

    const [counter, setCounter] = useState<number>( initialValue?.count || value );
    console.log( initialValue?.count )

    const isMounted = useRef( false );

    const increaseBy = (value:number)=> {        

        let newValue = Math.max( counter + value, 0);

        if(  initialValue?.maxCount ){

            newValue = Math.min(newValue, initialValue.maxCount)
        } 
        onChange && onChange({ count:newValue, product })
        setCounter( newValue );

    }

    const reset = ()=> {
        setCounter( initialValue?.count || value)
    }

    useEffect(()=>{
        if( !isMounted.current ) return
        setCounter( value )
    }, [value])

    useEffect(()=>{
        isMounted.current = true
    }, [])

    return {
        counter, 
        maxCount: initialValue?.maxCount,
        isMaxReached: !!initialValue?.maxCount && counter === initialValue.maxCount,
        increaseBy,
        reset

    }

}

