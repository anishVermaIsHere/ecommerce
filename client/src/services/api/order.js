import axiosInstance from "./axios-instance";

const URL = "/api/v1/orders"

export const orderCheckout = async (orderData)=>{
    return await axiosInstance.post(`${URL}/checkout`, orderData);
}