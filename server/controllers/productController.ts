import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import path from 'path'
import ApiError from '../error/ApiError';
import productService from "../services/productService"
import fileUpload from 'express-fileupload';
import { IProductInput } from '../models/product';
import { IOptionsInput } from '../models/product_options';
import { IImagesInput } from '../models/product_images';

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
      const product = await productService.updateProduct({id, name, price, product_slug, description, sizetable_path})

      if (categoryId) {
        await productService.createCategoryRelationship(product.get('id'), categoryId)
      }

      return res.json(product)
    }
    catch (error) {
      next(ApiError.badRequest(`Ошибка при обновлении Product: ${error}`))
    }
  };
  async deleteProduct(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { id } = req.body
      const product = await productService.deleteProduct(Number(id))

      return res.json(product)
    }
    catch (error) {
      next(ApiError.badRequest(`Ошибка при обновлении Product: ${error}`))
    }
  };

  async createOptions(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { product_color, options_slug, ProductId, description, option_order, } = req.body
      const { images } = req.files as any;

      const createdOptions = await productService.createOptions({ product_color, options_slug, price_increase: 0, ProductId, description, option_order }, images)

      return res.json(createdOptions)
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при создании ProductOptions/ProductOptionImages: ${error}`))
    }
  }
  async updateOptions(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { product_color, options_slug, ProductId, price_increase, po_order, id, main_page, description, option_order }:IOptionsInput = req.body
      let images : any;
      if (req.files) {
        images = req?.files?.images as any;
      }
       

      const createdOptions = await productService.updateOptions({ product_color, options_slug, price_increase: price_increase, ProductId, po_order: po_order, id, main_page, description, option_order  }, images)

      return res.json(createdOptions)
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при обновлении ProductOptions/ProductOptionImages: ${error}`))
    }
  }
  async deleteOptions(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { id }:IOptionsInput = req.body
       

      const createdOptions = await productService.deleteOptions(Number(id))

      return res.json(createdOptions)
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при обновлении ProductOptions/ProductOptionImages: ${error}`))
    }
  }
  async getCartOptions(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { ids }:any = req.body

      let idsArray:number[] = []

      for (var key in ids) {
        if (ids.hasOwnProperty(key)) {
          const value = Number(ids[key]);
          idsArray.push(value)
        }
      }

      console.log("idsArray", idsArray, typeof(idsArray), Array.isArray(idsArray))
       

      const cartOptions = await productService.getCartOptions(idsArray)

      return res.json(cartOptions)
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при обновлении ProductOptions/ProductOptionImages: ${error}`))
    }
  }
  async updateImage(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { main_image, id }:IImagesInput = req.body
       
      const createdOptions = await productService.updateImage(main_image, Number(id))

      return res.json(createdOptions)
    } catch (error) {
      next(ApiError.badRequest(`Ошибка при обновлении ProductOptions/ProductOptionImages: ${error}`))
    }
  }
  async deleteImage(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { id }:IImagesInput = req.body
       
      const createdOptions = await productService.deleteImage(Number(id))

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
      const { page, limit, main_page } = req.query;
      let { ProductId } = req.params;

      const products = await productService.getAllOptions(Number(ProductId), Number(limit), Number(page), Boolean(main_page))
      // const products = await productService.getAllProductsWithOptions()

      return res.json(products)
    }
    catch (error) {
      next(ApiError.badRequest(`Ошибка при запросе AllProduct: ${error}`))
    }
  }
  async getOneOption(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      let { OptionId } = req.params;

      const products = await productService.getOneOption(Number(OptionId))
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

  async createCategoryRelationship(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { productId, categoryId } = req.body
      console.log("productID, categoryId", productId, categoryId)
      const product = await productService.createCategoryRelationship(Number(productId), Number(categoryId))


      return res.json(product)
    }
    catch (error) {
      next(ApiError.badRequest(`Ошибка при создании Product: ${error}`))
    }
  };
  async deleteCategoryRelationship(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { productId, categoryId } = req.body
      console.log("productID, categoryId", productId, categoryId)
      const product = await productService.deleteCategoryRelationship(Number(productId), Number(categoryId))


      return res.json(product)
    }
    catch (error) {
      next(ApiError.badRequest(`Ошибка при создании Product: ${error}`))
    }
  };

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
