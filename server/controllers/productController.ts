import { NextFunction, Request, Response } from 'express';
import models from '../models/models';
import { v4 as uuidv4 } from 'uuid';
import path from 'path'
import ApiError from '../error/ApiError';
import { Model, where } from 'sequelize/types';
import { Op } from "sequelize";
import productService from "../services/productService"
import fileUpload from 'express-fileupload';

interface IObject {
      [key: string]: any;
}

class ProductController {
  
  constructor(){}
  
  async createProduct(req:Request, res:Response, next: NextFunction): Promise<any> {
    try{
      const {name, price, product_slug} = req.body
      const product = await productService.createProduct({name, price, product_slug})
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

      const createdOptions = await productService.createOptions({product_color, options_slug, ProductId}, images)

      return res.json(createdOptions)
    } catch (error) {
      next (ApiError.badRequest(`Ошибка при создании ProductOptions/ProductOptionImages: ${error}`))
    }
  }

  async getAllProduct(req:Request, res:Response, next: NextFunction):Promise<any> {
    try{
      const {page, limit}  = req.query;

      const products = await productService.getAllProduct(Number(limit), Number(page))

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

  async getProduct(req:Request, res:Response, next: NextFunction):Promise<any> {
    try{

    }
    catch(error){
      next(ApiError.badRequest(`Ошибка при запросе AllProduct: ${error}`))
    }

  }

}

export default new ProductController();


// async getAllOptionsByProductName2(req:Request, res:Response):Promise<any> {
//   const {product_slug} = req.params;
//   const product = await models.Product.findOne({where: {product_slug}});

//   const productId: number = product?.get('id') as number;

//   const ProductOptions = await models.ProductOptions.findAll({where: {productId}})

//   let result: IObject = {};
//   let currentItem: IObject = {};
  
//   for (let item of ProductOptions) {
//     const images = await models.ProductOptionsImage.findAll({
//       where: {
//         productOptionId: item.get("id") as number
//       }
//     })
//     result[item.get("id") as string] = JSON.parse(JSON.stringify(item));
//     currentItem = result[item.get("id") as string];
//     currentItem["img"] = JSON.parse(JSON.stringify(images));
//   }  
//   return res.json(result)
// }