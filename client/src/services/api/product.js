import axios from 'axios';
import AppConfig from '../../config/app.config';

axios.defaults.baseURL = AppConfig.baseUrl;

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
