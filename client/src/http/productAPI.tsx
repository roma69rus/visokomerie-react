import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode"
import { IProduct, IProductCreate } from "../types/productTypes";
import { IProductOptionCreate, IProductOptions, IProductOptionsImages } from "../types/productOptionsTypes";
import { ICategory } from "../types/categoryTypes";



export const createProduct = async (product: IProductCreate) => {
    const { data } = await $authHost.post<IProduct>('api/products', product)
    console.log(data)
    return data
}
export const createCategory = async (cat: ICategory) => {
    const { data } = await $authHost.post<ICategory>('api/category', cat)
    console.log(data)
    return data
}
export const createRel = async (productId: number, categoryId: number) => {
    const { data } = await $authHost.post<IProduct>('api/products/rel', {productId, categoryId})
    console.log(data)
    return data
}
export const deleteRel = async (productId: number, categoryId: number) => {
    const { data } = await $authHost.delete<IProduct>('api/products/rel', {data: {productId, categoryId}})
    console.log(data)
    return data
}
export const updateProduct = async (product: IProduct) => {
    const { data } = await $authHost.put<IProduct>('api/products', product)
    console.log(data)
    return data
}

export const deleteProduct = async (id: number) => {
    const { data } = await $authHost.delete<IProduct>('api/products', {data: {id}})
    console.log(data)
    return data
}
export const deleteOptions = async (id: number) => {
    const { data } = await $authHost.delete<IProduct>('api/products/options', {data: {id}})
    console.log(data)
    return data
}

export const createProductOption = async (product: FormData) => {
    const { data } = await $authHost.post<IProduct>('api/products/options', product)
    console.log(data)
    return data
}
export const updateProductOption = async (product: FormData) => {
    const { data } = await $authHost.put<IProductOptions>('api/products/options', product)
    console.log(data)
    return data
}
export const updateImage = async (main_image: boolean, id: number) => {
    const { data } = await $authHost.put<IProductOptionsImages>('api/products/options/image', {main_image, id})
    console.log(data)
    return data
}

export const deleteImage = async (id: number) => {
    const { data } = await $authHost.delete<any>('api/products/options/image', {data: {id}})
    console.log(data)
    return data
}

export const getAllProducts = async () => {
    const { data } = await $host.get<IProduct[]>('api/products/')
    return data
}
export const getOneProduct = async (product_slug: string | null, color: string | null) => {
    const { data } = await $host.get<IProduct>('api/products/' + product_slug + '?color=' + color)
    return data
}
export const getCartOptions = async (ids: number[]) => {
    const { data } = await $host.post<IProductOptions[]>('api/products/options/cart/', {ids: ids})
    return data
}

export const getOptionsByCategorySlug = async (category_slug: string) => {
    const { data } = await $host.get<IProductOptions[]>('api/category/' + category_slug + '/options')
    return data
}


export const getAllCategories = async () => {
    const { data } = await $host.get<ICategory[]>('api/category/')
    return data
}

export const getOneCategory = async (catalog_slug: string) => {
    const { data } = await $host.get<ICategory>('api/category/' + catalog_slug)
    console.log("getOneCategory", data)
    return data
}
export const updateCategory = async (cat: ICategory) => {
    const { data } = await $authHost.put<ICategory>('api/category/', cat)
    console.log("getOneCategory", data)
    return data
}
export const deleteCategory = async (id: number) => {
    const { data } = await $authHost.delete<ICategory>('api/category/', {data:{id}})
    console.log("getOneCategory", data)
    return data
}

export const getMainPageOptions = async () => {
    const { data } = await $host.get<IProductOptions[]>('api/products/options?' + "main_page=true")
    return data
}

export const getOptionsByProductName = async (product_slug: string) => {
    const { data } = await $host.get<IProduct>('api/products/' + product_slug)
    return data
}
export const getOptionsByProductNameAndImages = async (product_slug: string) => {
    const { data } = await $host.get<IProduct>('api/products/' + product_slug + "?getAllImages=true")
    return data
}
