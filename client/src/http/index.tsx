import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios"
import { useContext } from "react"
import { Context, IContext } from ".."

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
    
    try {
        const token = localStorage.getItem("token");

        if (token != null) {
            (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`;
        } else {
        }
        return config;
    } catch (error) {
        throw new Error(error as string);
    }
}

$authHost.interceptors.request.use(authInterceptor)


export {
    $host,
    $authHost
}