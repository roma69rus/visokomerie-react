import { v4 as uuidv4 } from 'uuid';
import path from 'path'

import {IOptionsInput, ProductOptions} from       '../models/product_options'
import {IProductInput, Product} from              '../models/product'
import {IImagesInput, ProductOptionsImages} from  '../models/product_images'
import {ICategoryInput, Category} from            '../models/product_category'



class CategoryService {
  
  constructor(){

  }
  
  async create(dto:ICategoryInput) {
      const category = await Category.create(dto)
      return JSON.parse(JSON.stringify(category)) 
  };

  async createProductRelationship(productId: number, categoryId: number){
    const product = await Product.findByPk(productId);
    const category = await Category.findByPk(categoryId);

    await category?.$set('Products', [product!.id])

    return category;
  }

  async getAll():Promise<any> {
   
      const categories = await Category.findAll({ 
        include: { 
          all: true, 
          nested: true 
        }
      });
      return JSON.parse(JSON.stringify(categories))
  }


}

export default new CategoryService();