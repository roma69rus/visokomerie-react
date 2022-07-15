import models from '../models/models';
import { v4 as uuidv4 } from 'uuid';
import path from 'path'
import { UploadedFile } from 'express-fileupload';


class productService {
  constructor() {}

  async createProduct(product:any|string): Promise<any> {
    const category = await models.Product.create(product)
    return category;
  };

  async createOptions(options:any, imgs:any): Promise<any> {
   
    const createdOptions = await models.ProductOptions.create(options)
    

    let main_image:boolean = true;
    const images:any = {};
     
    for (let item of imgs) {
      const img_path = uuidv4() + ".jpg";
      item.mv(path.resolve(__dirname, '..', 'static', img_path));
      const image = await models.ProductOptionsImage.create({ 
        img_path: img_path,
        ProductOptionId: createdOptions.get('id') as number,
        main_image: main_image,
      })
      main_image = false;
      images[img_path] = image;
    }     

    const result: any = {};
    result["product_options"] = JSON.parse(JSON.stringify(createdOptions));
    result["images"] = JSON.parse(JSON.stringify(images))

    return result;
  }

  async getAllProduct(limit:number, page: number):Promise<any> {

    limit = limit || 100;   //по умолчанию 100 элементов на странице
    page = page || 1        //по умолчанию первая страница

    let offset: number = page * limit - limit

    const products = await models.Product.findAll({
      include:[{
        model: models.ProductOptions, 
        required: false
      }
    ]});
    
    const product_options = await models.ProductOptions.findAndCountAll({
      include:[{
        model: models.ProductOptionsImage, 
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
      const product = await models.Product.findOne({
        where: {product_slug: product_slug}, 
        include: [{
          model: models.ProductOptions,
          include : [{
            model: models.ProductOptionsImage,
            where: {main_image: true},
            required: false
          }],
        }],
        limit,
        offset
      });
      result = product;
    }

    if (color) {

      const product = await models.Product.findOne({
        where: {product_slug: product_slug}, 
        include: [{
          model: models.ProductOptions,
          where: {options_slug: color},
          include : [{
            model: models.ProductOptionsImage,
            where: {main_image: true},
            required: false
          }],
        }],
        limit,
        offset
      });
      result = product;
    }
    return result;   
  } 

  async getProduct(productId: any):Promise<any> {
  
  }
}

export default new productService();