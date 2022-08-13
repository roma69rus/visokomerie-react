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
export const getOneProduct = async (product_slug: string | null, color: string | null) => {
    const {data} = await $host.get('api/products/' + product_slug + '?color=' + color)
    return data
}

export const getOptionsByCategorySlug = async (category_slug: string) => {
    const {data} = await $host.get('api/category/'+ category_slug +'/options')
    return data
}


export const getAllCategories = async () => {
    const {data} = await $host.get('api/category/')
    return data
}
