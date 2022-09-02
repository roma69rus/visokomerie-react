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

  async update(dto:ISliderInput, img:any) {
    if (img) {
      const img_path:string = uuidv4() + ".jpg";
      img.mv(path.resolve(__dirname, '..', 'static', img_path));
  
      await Slider.update({...dto, img_path: img_path}, {where: {id: dto.id}})
      return await Slider.findOne({where: {id: dto.id}}) 
    }
    else {
      const sl = await Slider.findOne({where: {id: dto.id}})
      await Slider.update({...sl, ...dto, img_path: sl?.img_path}, {where: {id: dto.id}})
      return await Slider.findOne({where: {id: dto.id}})
    } 
  };

  async delete(id: number) {
    await Slider.destroy({where: {id}}) 
  };

  async getAll():Promise<any> {
   
      const slider = await Slider.findAll();
      return JSON.parse(JSON.stringify(slider))
  }


}

export default new SliderService();