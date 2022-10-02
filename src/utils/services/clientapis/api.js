import axios from 'axios';

axios.defaults.baseURL=process.env.REACT_APP_BASEURL;
export const getProducts=()=>{
    const URL='/shop-fake-api/products.json';
    const response=axios({
        method:'GET',
        url:URL
    });
    
    return response;
}

// https://mocki.io/v1/de09d570-a76f-417e-ae6a-e0a04229e4cd