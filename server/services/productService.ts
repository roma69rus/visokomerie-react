import { v4 as uuidv4 } from 'uuid';
import path from 'path'

import {IOptionsInput, ProductOptions} from       '../models/product_options'
import {IProductInput, Product} from              '../models/product'
import {IImagesInput, ProductOptionsImages} from  '../models/product_images'
import {ICategoryInput, Category} from          '../models/product_category'
import ApiError from                              '../error/ApiError';



class productService {
  constructor() {}

  async createProduct(product:IProductInput): Promise<any> {    
    const createdProduct = await Product.create(product)

    return createdProduct;
  };

  async createOptions(options:IOptionsInput, imgs:any): Promise<any> {
   
    let image = {} as IImagesInput;
    let createdImages = {} as Array<any>

    const createdOptions = await ProductOptions.create(options)
    
    let main_image:boolean = true;
    for (let i = 0; i < imgs.length; i++) {
      const img_path:string = uuidv4() + ".jpg";

      imgs[i].mv(path.resolve(__dirname, '..', 'static', img_path));
      image = {img_path, main_image, ProductOptionId: createdOptions.get('id')}

      // const res = await createdOptions.createProductOptionsImages(image) //не рботает
      const createdImage = await ProductOptionsImages.create(image)
      main_image=false;

      createdImages[i] = createdImage;
    }

    return {"product_options": createdOptions, "product_options_images":createdImages};
  }

  async getAllProduct(limit:number, page: number):Promise<any> {

    limit = limit || 100;   //по умолчанию 100 элементов на странице
    page = page || 1        //по умолчанию первая страница

    let offset: number = page * limit - limit

    const products = await Product.findAll({
      include:[{
        model: ProductOptions, 
        required: false
      }
    ]});
    
    const product_options = await ProductOptions.findAndCountAll({
      include:[{
        model: ProductOptionsImages, 
        where: {main_image: true},
        required: false
      }],
      limit,
      offset
    });

    return {products, product_options}
  }

  async getOptionsByProductName(product_slug:string, color:any, page:number, limit:number):Promise<any> {
    
    limit = limit || 100;   //по умолчанию 100 элементов на странице
    page = page || 1        //по умолчанию первая страница

    console.log("product_slug", product_slug);

    const offset :number = page * limit - limit
    
    let result: any = {};

    if (!color) {
      const productOpt = await Product.findOne({
        where: {product_slug: product_slug}, 
        include: [{
          model: ProductOptions,
          include : [{
            model: ProductOptionsImages,
            where: {main_image: true},
            required: false,
          }],
        }],
        limit,
        offset
      });
      result = productOpt;
    }

    if (color) {

      const productOpt = await Product.findOne({
        where: {product_slug: product_slug}, 
        include: [{
          model: ProductOptions,
          where: {options_slug: color},
          include : [{
            model: ProductOptionsImages,
            where: {main_image: true},
            required: false
          }],
        }],
        limit,
        offset
      });
      result = productOpt;
    }
    return result;   
  } 

  // async getProduct(product_slug: string):Promise<any> {
  //   const product = await Product.findOne({
  //     where: {product_slug: product_slug},
  //     include: { 
  //       all: true, 
  //       nested: true 
  //     }
  //   })
  // }

  async createCategoryRelationship(productId: number, categoryId: number){
    
    try{
      const product  = await Product.findOne({where: {id: productId}})
      const category = await Category.findOne({where: {id: categoryId}});

      const result = await product?.$set('Categories', [category!.get('id')])

      return product;
    }
    catch(error){
      throw ApiError.badRequest(`Ошибка при создании связи Product и  Category: ${error}`)
    }
  }
}

export default new productService();