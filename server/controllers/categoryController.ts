import { Request, Response } from 'express';
import models from '../models/models'
import ApiError from '../error/ApiError';
import { Json } from 'sequelize/types/utils';

class CategoryController {
  
  constructor(){

  }
  
  async create(req:Request, res:Response): Promise<any> {
    const {name} = req.body
    const category = await models.ProductCategory.create({name})
    return res.json(category)
  };

  async getAll(req:Request, res:Response):Promise<any> {
    const categories = await models.ProductCategory.findAll();
    return res.json(categories)
  }
}

export default new CategoryController();