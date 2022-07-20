import { v4 as uuidv4 } from 'uuid';
import path from 'path'

import {ISliderInput, Slider} from '../models/slider'


class SliderService {
  
  constructor(){ }
  
  async create(dto:ISliderInput, img:any) {
    const img_path:string = uuidv4() + ".jpg";
    img.mv(path.resolve(__dirname, '..', 'static', img_path));

    const slider = await Slider.create({...dto, img_path: img_path})
    return JSON.parse(JSON.stringify(slider)) 
  };

  async getAll():Promise<any> {
   
      const slider = await Slider.findAll();
      return JSON.parse(JSON.stringify(slider))
  }


}

export default new SliderService();