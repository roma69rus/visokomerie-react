import { Request, Response, NextFunction } from 'express';
import models from '../models/models'
import ApiError from '../error/ApiError';
import { Json } from 'sequelize/types/utils';

class SliderController {
  
  constructor(){

  }
  
  async create(req:Request, res:Response, next: NextFunction): Promise<any> {
    try {
      const {img_path, url, btn_txt, isVideo, slide_order} = req.body
      const slide = await models.Slider.create({img_path, url, btn_txt, isVideo, slide_order})
      return res.json(slide)  

    } catch (error) {
      next (ApiError.badRequest(`Ошибка при создании slider Slide: \n${error}`))
    }
    
  };

  async getAll(req:Request, res:Response, next:NextFunction):Promise<any> {
    try {
      const slides = await models.Slider.findAll();
      return res.json(slides)      
    } catch (error) {
      next (ApiError.badRequest(`Ошибка при запросе slider Slide: \n${error}`))
    }
    
  }
}

export default new SliderController();