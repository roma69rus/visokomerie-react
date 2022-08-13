import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode"
import { ICategory, IProduct, IProductOptions } from "../store/ProductStore";

export const createProduct = async (product: IProduct) => {
    const {data} = await $host.post<IProduct>('api/products', product)
    console.log(data)
    return data
}

export const getAllProducts = async () => {
    const {data} = await $host.get<IProduct[]>('api/products/')
    return data
}
export const getOneProduct = async (product_slug: string | null, color: string | null) => {
    const {data} = await $host.get<IProduct>('api/products/' + product_slug + '?color=' + color)
    return data
}

export const getOptionsByCategorySlug = async (category_slug: string) => {
    const {data} = await $host.get<IProductOptions[]>('api/category/'+ category_slug +'/options')
    return data
}


export const getAllCategories = async () => {
    const {data} = await $host.get<ICategory[]>('api/category/')
    return data
}

export const getOneCategory = async (catalog_slug: string) => {
    const {data} = await $host.get<ICategory>('api/category/' + catalog_slug)
    console.log("getOneCategory",  data)
    return data
}

export const getMainPageOptions = async () => {
    const {data} = await $host.get<IProductOptions[]>('api/products/options')
    return data
}

export const getOptionsByProductName = async (product_slug: string) => {
    const {data} = await $host.get<IProduct>('api/products/' + product_slug)
    return data
}
export const getOptionsByProductNameAndImages = async (product_slug: string) => {
    const {data} = await $host.get<IProduct>('api/products/' + product_slug + "?getAllImages=true")
    return data
}
