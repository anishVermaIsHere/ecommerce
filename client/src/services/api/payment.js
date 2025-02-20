import axiosInstance from "./axios-instance";

const URL = "/api/v1/payment";

export const createPaymentIntent = async (orderData)=>{
   return await axiosInstance.post(`${URL}/create-intent`, orderData);
}