import axios from 'axios';

axios.defaults.baseURL=process.env.REACT_APP_BASEURL;

export const getProducts=()=>{
    const URL='/products';
    const response=axios({
        method:'GET',
        url:URL
    });
    
    return response;
}

export const getProductByCategory=(category)=>{
    const URL='/products?category='+category;
    const response=axios({
        method:'GET',
        url:URL
    })
    return response;
}

export const getProductByQuery=(query)=>{
    const URL='/products?q='+query;
    const response=axios({
        method:'GET',
        url:URL
    })
    return response;
}
