import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode"
import { IProduct } from "../store/ProductStore";

export const createProduct = async (product: IProduct) => {
    const {data} = await $host.post('api/products', product)
    console.log(data)
    return data
}

export const getProducts = async (product_slug: string | null, color: string | null) => {
    const {data} = await $host.get('api/products')
    return data
}

