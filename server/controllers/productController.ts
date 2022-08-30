import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import path from 'path'
import ApiError from '../error/ApiError';
import productService from "../services/productService"
import fileUpload from 'express-fileupload';
import { IProductInput } from '../models/product';
import { IOptionsInput } from '../models/product_options';

interface IObject {
  [key: string]: any;
}

class ProductController {

  constructor() { }

  async createProduct(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { name, price, product_slug, categoryId } = req.body
      const product = await productService.createProduct({ name, price, product_slug })

      if (categoryId) {
        await productService.createCategoryRelationship(product.get('id'), categoryId)
      }

      return res.json(product)
    }
    catch (error) {
      next(ApiError.badRequest(`Ошибка при создании Product: ${error}`))
    }
  };
  async updateProduct(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { name, price, product_slug, categoryId, id, description, sizetable_path } = req.body
      const product = await productService.updateProduct({ id, name, price, product_slug, description, sizetable_path,  })

      if (categoryId) {
        await productService.createCategoryRelationship(product.get('id'), categoryId)
      }

      return res.json(product)
    }
    catch (error) {
      next(ApiError.badRequest(`Ошибка при обновлении Product: ${error}`))
    }
  };

  async createOptions(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { product_color, options_slug, ProductId } = req.body
      const { images } = req.files as any;

      const createdOptions = await productService.createOptions({ product_color, options_slug, price_increase: 0, ProductId }, images)

      return res.json(createdOptions)
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при создании ProductOptions/ProductOptionImages: ${error}`))
    }
  }
  async updateOptions(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { product_color, options_slug, ProductId, price_increase, po_order, id }:IOptionsInput = req.body
      const { images } = req?.files as any;

      const createdOptions = await productService.updateOptions({ product_color, options_slug, price_increase: price_increase, ProductId, po_order: po_order, id }, images)

      return res.json(createdOptions)
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при обновлении ProductOptions/ProductOptionImages: ${error}`))
    }
  }

  async getAllProductsWithOptions(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      // const {page, limit}  = req.query;

      // const products = await productService.getAllProductsWithOptions(Number(limit), Number(page))
      const products = await productService.getAllProductsWithOptions()

      return res.json(products)
    }
    catch (error) {
      next(ApiError.badRequest(`Ошибка при запросе AllProduct: ${error}`))
    }
  }

  async getAllProducts(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      // const {page, limit}  = req.query;

      const products = await productService.getAllProducts()
      // const products = await productService.getAllProductsWithOptions()

      return res.json(products)
    }
    catch (error) {
      next(ApiError.badRequest(`Ошибка при запросе AllProduct: ${error}`))
    }
  }

  async getAllOptions(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { page, limit } = req.query;
      let { ProductId } = req.params;

      const products = await productService.getAllOptions(Number(ProductId), Number(limit), Number(page))
      // const products = await productService.getAllProductsWithOptions()

      return res.json(products)
    }
    catch (error) {
      next(ApiError.badRequest(`Ошибка при запросе AllProduct: ${error}`))
    }
  }


  async getOptionsByProductName(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      let { product_slug } = req.params;
      let { color, page, limit, getAllImages } = req.query;

      let getAllImagesProps: boolean;

      if (getAllImages) {
        getAllImages === 'true' ? getAllImagesProps = true : getAllImagesProps = false
      } else {
        getAllImagesProps = false
      }


      const options = await productService.getOptionsByProductName(product_slug, color, getAllImagesProps, Number(page), Number(limit))

      return res.json(options)
    }
    catch (error) {
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
