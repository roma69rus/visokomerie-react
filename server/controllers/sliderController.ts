import { Request, Response, NextFunction } from 'express';
import ApiError from '../error/ApiError';
import sliderService from '../services/sliderService';

class SliderController {
  
  constructor(){

  }
  
  async create(req:Request, res:Response, next: NextFunction): Promise<any> {
    try {
      const {url, btn_text, isVideo} = req.body
      const {image} = req.files as any;

      const slide = await sliderService.create({
        url, btn_text, isVideo,
        img_path: ''
      }, image)

      return res.json(slide)  

    } catch (error) {
      next (ApiError.badRequest(`Ошибка при создании slider Slide: \n${error}`))
    }
    
  };

  async getAll(req:Request, res:Response, next:NextFunction):Promise<any> {
    try {
      const slides = await sliderService.getAll();
      return res.json(slides)      
    } catch (error) {
      next (ApiError.badRequest(`Ошибка при запросе slider Slide: \n${error}`))
    }
    
  }
}

export default new SliderController();