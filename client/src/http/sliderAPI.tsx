import { $authHost, $host } from ".";
import jwt_decode from "jwt-decode"
import { ISlider, ISliderCreate } from "../types/sliderTypes";

export const createSlide = async (slide: FormData) => {
    const {data} = await $authHost.post<ISlider>('api/slider', slide)
    console.log(data)
    return data
}

export const getSlider = async () => {
    const {data} = await $host.get<ISlider[]>('api/slider')
    return data
}

