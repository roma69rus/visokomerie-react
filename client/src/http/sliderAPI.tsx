import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode"
import { IProduct } from "../store/ProductStore";
import { ISlider } from "../store/SliderStore";

export const createSlide = async (slide: ISlider) => {
    const {data} = await $authHost.post('api/slider', slide)
    console.log(data)
    return data
}

export const getSlider = async () => {
    const {data} = await $host.get<ISlider[]>('api/slider')
    return data
}

