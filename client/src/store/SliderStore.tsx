import { makeAutoObservable } from "mobx";


export interface ISlider {
  id: number;
  img_path: string;
  url: string | null;
  btn_text: string | null;
  isVideo: boolean | null;
  slide_order: number | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null
}


export interface ISliderStore {
  slider: Array<ISlider> | null
}

export default class SliderStore implements ISliderStore {
  private _slider: Array<ISlider> | null;
  constructor() {
    
    this._slider = [
      {
          "id": 1,
          "img_path": "d75faa1b-517f-4a99-a26a-bcb43c596589.jpg",
          "url": "1234",
          "btn_text": null,
          "isVideo": true,
          "slide_order": null,
          "createdAt": "2022-07-19T10:39:49.492Z",
          "updatedAt": "2022-07-19T10:39:49.492Z",
          "deletedAt": null
      }
  ]
    makeAutoObservable(this)
  }


  setSlider(Slider: any) {
    this._slider = Slider
  }


  get slider() {
    return this._slider
  }




}
