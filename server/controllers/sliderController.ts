import { Request, Response, NextFunction } from 'express';
import ApiError from '../error/ApiError';
import { ISliderInput } from '../models/slider';
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
  async update(req:Request, res:Response, next: NextFunction): Promise<any> {
    try {
      const {url, btn_text, isVideo, id, slide_order}:ISliderInput = req.body
      
      let image: any;
      if (req.files){
        image = req.files.image;
      }

      

      const slide = await sliderService.update({
        url, btn_text, isVideo,
        img_path: '',
        id,
        slide_order,
      }, image)

      return res.json(slide)  

    } catch (error) {
      next (ApiError.badRequest(`Ошибка при создании slider Slide: \n${error}`))
    }
    
  };
  async delete(req:Request, res:Response, next: NextFunction): Promise<any> {
    try {
      const {id}:ISliderInput = req.body
      
      const slide = await sliderService.delete(Number(id))

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