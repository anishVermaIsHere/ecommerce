import {useContext} from 'react';

export const useMyContext=(context)=>{
    const cartContext = useContext(context);
    return cartContext;
}
