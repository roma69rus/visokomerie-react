import { Request, Response, NextFunction } from 'express';
import { Category } from '../models/product_category'
import ApiError from '../error/ApiError';
import categoryService from '../services/categoryService';


class CategoryController {

  constructor() {

  }

  async create(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { name, category_slug } = req.body
      const category = await categoryService.create({ name, category_slug })
      return res.json(category)
    }
    catch (error) {
      next(ApiError.badRequest(`Ошибка при создании Category: ${error}`))
    }
  };

  async getAll(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const categories = await categoryService.getAll();
      return res.json(categories)
    }
    catch (error) {
      next(ApiError.badRequest(`Ошибка при запросе Categories: \n${error}`))
    }

  }
  async getOneCategory(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {

      let { category_slug } = req.params;

      const category = await categoryService.getOneCategory(category_slug)
      return res.json(category)
    }
    catch (error) {
      next(ApiError.badRequest(`Ошибка при запросе Categories: \n${error}`))
    }

  }
  async getOneCategoryWithOptions(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {

      let { category_slug } = req.params;

      const category = await categoryService.getOneCategoryWithOptions(category_slug)
      return res.json(category)
    }
    catch (error) {
      next(ApiError.badRequest(`Ошибка при запросе Categories: \n${error}`))
    }

  }
  async getAllCategoriesWithOptions(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {

      const category = await categoryService.getAllCategoriesWithOptions()
      return res.json(category)
    }
    catch (error) {
      next(ApiError.badRequest(`Ошибка при запросе Categories: \n${error}`))
    }

  }


}

export default new CategoryController();