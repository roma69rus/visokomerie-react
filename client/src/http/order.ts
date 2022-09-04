import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode"
import { IOrder, IOrderCreate } from "../types/ordersType";

export const createOrder = async (order: IOrderCreate) => {
    const {data} = await $host.post<IOrder>('api/order', order)
    console.log(data)
    return data
}

export const getOrders = async () => {
    const {data} = await $authHost.get<IOrder[]>('api/order')
    return data
}

export const deleteOrder = async (id: number) => {
    const {data} = await $authHost.delete<IOrder>('api/order', {data: {id}})
    return data
} 

