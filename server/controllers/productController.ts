import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import path from 'path'
import ApiError from '../error/ApiError';
import productService from "../services/productService"
import fileUpload from 'express-fileupload';

interface IObject {
      [key: string]: any;
}

class ProductController {
  
  constructor(){}
  
  async createProduct(req:Request, res:Response, next: NextFunction): Promise<any> {
    try{
      const {name, price, product_slug, categoryId} = req.body
      const product = await productService.createProduct({name, price, product_slug})

      if (categoryId){
        await productService.createCategoryRelationship(product.get('id'), categoryId)
      }

      return res.json(product)
    }
    catch(error) {
      next(ApiError.badRequest(`Ошибка при создании Product: ${error}`))
    }
  };

  async createOptions (req:Request, res:Response, next: NextFunction): Promise<any> {
    try {
      const {product_color, options_slug, ProductId} = req.body
      const {images} = req.files as any;

      const createdOptions = await productService.createOptions({product_color, options_slug, price_increase: 0, ProductId}, images)

      return res.json(createdOptions)
    } catch (error) {
      next (ApiError.badRequest(`Ошибка при создании ProductOptions/ProductOptionImages: ${error}`))
    }
  }

  async getAllProduct(req:Request, res:Response, next: NextFunction):Promise<any> {
    try{
      const {page, limit} = req.query;

      // const products = await productService.getAllProduct(Number(limit), Number(page))
      const products = await productService.getAllProduct()

      return res.json(products)
    }
    catch(error) {
      next(ApiError.badRequest(`Ошибка при запросе AllProduct: ${error}`))
    }  
  }


  async getOptionsByProductName(req:Request, res:Response, next: NextFunction):Promise<any> {
    try{
      let {product_slug} = req.params;
      let {color, page, limit} = req.query;
      
      const options = await productService.getOptionsByProductName(product_slug, color, Number(page), Number(limit))

      return res.json(options)
    }
    catch(error){
      next(ApiError.badRequest(`Ошибка при запросе ProductOptions: ${error}`))
    }
  } 

  // async getProduct(req:Request, res:Response, next: NextFunction):Promise<any> {
  //   try{
  //     let {product_slug} = req.params

  //     const product = productService.getProduct(product_slug);

  //     return res.json(product)

  //   }
  //   catch(error){
  //     next(ApiError.badRequest(`Ошибка при запросе AllProduct: ${error}`))
  //   }

  // }

}

export default new ProductController();
