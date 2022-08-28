import { makeAutoObservable } from "mobx";
import { ISlider } from "../types/sliderTypes";





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
