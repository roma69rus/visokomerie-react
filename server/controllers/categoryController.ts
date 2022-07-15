import { Request, Response, NextFunction} from 'express';
import models from '../models/models'
import ApiError from '../error/ApiError';
import { stringify } from 'querystring';

class CategoryController {
  
  constructor(){

  }
  
  async create(req:Request, res:Response, next: NextFunction): Promise<any> {
    try{
      const {name} = req.body
      const category = await models.Categories.create({name})
      return res.json(category)
    }
    catch(error){
      next(ApiError.badRequest(`Ошибка при создании Category: ${error}`))
    }
    
  };

  async getAll(req:Request, res:Response, next: NextFunction):Promise<any> {
    try{
      const categories = await models.Categories.findAll();
      return res.json(categories)
    }
    catch(error){
      next(ApiError.badRequest(`Ошибка при запросе Categories: \n${error}`))
    }
    
  }
}

export default new CategoryController();