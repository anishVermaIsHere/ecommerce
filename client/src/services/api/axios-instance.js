import axios from "axios";
import AppConfig from "../../config/app.config";

const axiosInstance = axios.create({
    baseURL: AppConfig.baseUrl2
});

export default axiosInstance