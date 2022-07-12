import { NextFunction, Request, Response } from 'express';
import models from '../models/models';
import { v4 as uuidv4 } from 'uuid';
import path from 'path'
import ApiError from '../error/ApiError';
import { Model, where } from 'sequelize/types';
import { Op } from "sequelize";

class ProductController {
  
  constructor(){}
  
  async create(req:Request, res:Response): Promise<any> {
    const {name, price, product_slug} = req.body
    const category = await models.Product.create({name, price, product_slug})
    return res.json(category)
  };

  async createOptions (req:Request, res:Response, next: NextFunction): Promise<any> {
    try {
      const {product_color, options_slug, productId} = req.body
      const {img} = (req as any).files;
      var optionImages:any = {};

      const options = await models.ProductOptions.create({
        product_color, 
        options_slug, 
        productId
      })
      
      for (let item of img) {
        const img_path = uuidv4() + ".jpg";
        item.mv(path.resolve(__dirname, '..', 'static', img_path));
        const image = await models.ProductOptionsImage.create({ 
          img_path: img_path,
          productOptionId: options.get('id') as number,
        })
        optionImages[img_path] = image;
      }     
      return res.json({optionImages, options})
    } catch (error) {
      console.log("Ошибка при создании ProductOptions/ProductOptionImages")
      next (ApiError.badRequest(error as string))
    }
  }

  async getAllProduct(req:Request, res:Response):Promise<any> {
    const product = await models.Product.findAll()
    return res.json(product)
  }

  async getAllOptionsByProductName(req:Request, res:Response):Promise<any> {
    const {product_slug} = req.params;
    const product = await models.Product.findOne({where: {product_slug}});

    const productId: number = product?.get('id') as number;

    const ProductOptions = await models.ProductOptions.findAll({where: {productId}})
 
    interface IObject {
      [key: string]: any;
    }
    let result: IObject = {};
    let currentItem: IObject = {};
    
    const ProductOptionsIds = new Array(ProductOptions.length);
    for (let item of ProductOptions) {
      ProductOptionsIds[item.get("id") as number] = item.get("id")
      const images = await models.ProductOptionsImage.findAll({
        where: {
          productOptionId: item.get("id") as number
        }
      })
      result[item.get("id") as string] = JSON.parse(JSON.stringify(item));
      currentItem = result[item.get("id") as string];
      currentItem["img"] = JSON.parse(JSON.stringify(images));
    }  
    return res.json(result)
  }
  
  async getById(req:Request, res:Response):Promise<any> {

  }

}

export default new ProductController();