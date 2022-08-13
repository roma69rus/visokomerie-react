import { makeAutoObservable } from "mobx";
import { IImage } from "./ProductStore";


export interface ISlider extends IImage{
  // id: number;
  // img_path: string;
  url: string | null;
  btn_text: string | null;
  isVideo: boolean | null;
  slide_order: number | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null
}


export interface ISliderStore {
  slider: Array<ISlider>
  setSlider: (Slider: ISlider[]) => void;
}

export default class SliderStore implements ISliderStore {
  private _slider: Array<ISlider>;
  constructor() {
    
    this._slider = []
    makeAutoObservable(this)
  }


  setSlider(Slider: ISlider[]) {
    this._slider = Slider
  }


  get slider() {
    return this._slider
  }




}
