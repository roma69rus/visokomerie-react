import { IImage } from "./productOptionsTypes";


export interface ISlider extends IImage {
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

export interface ISliderCreate {
  url: string | null;
  btn_text: string | null;
  isVideo: boolean | null;
  image: File;
}