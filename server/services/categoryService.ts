import { v4 as uuidv4 } from 'uuid';
import path from 'path'

import { IOptionsInput, ProductOptions } from '../models/product_options'
import { IProductInput, Product } from '../models/product'
import { IImagesInput, ProductOptionsImages } from '../models/product_images'
import { ICategoryInput, Category } from '../models/product_category'
import { $GetType, AssociationActionOptions, AssociationCountOptions, AssociationGetOptions, Model, Sequelize } from 'sequelize-typescript';
import { AssociationCreateOptions } from 'sequelize-typescript/dist/model/model/association/association-create-options';
import { SequelizeHooks } from 'sequelize/types/hooks';
import { ValidationOptions } from 'sequelize/types/instance-validator';
import { Fn, Col, Literal } from 'sequelize/types/utils';



class CategoryService {

  constructor() {

  }

  async create(dto: ICategoryInput) {
    const category = await Category.create(dto)
    return JSON.parse(JSON.stringify(category))
  };

  async createProductRelationship(productId: number, categoryId: number) {
    const product = await Product.findByPk(productId);
    const category = await Category.findByPk(categoryId);

    await category?.$set('Products', [product!.id])

    return category;
  }

  async getAll(): Promise<any> {

    const categories = await Category.findAll();
    // const categories = await Category.findAll({
    //   include: {
    //     all: true,
    //     nested: true
    //   }
    // });
    // const categories = await Category.findAll({
    //   include: [{
    //     model: Product,
    //     include: [{
    //       model: ProductOptions,
    //       include: [{
    //         model: Product
    //       }, {
    //         model:ProductOptionsImages,
    //         where: {main_image: true}
    //       }]
    //     }]
    //   }]
    // });

    // interface ICategoryPO {
    //   id: number,
    //   name: string,
    //   description: string,
    //   category_slug: string,
    //   category_order: number,
    //   Products: any[],
    //   ProductOptions: any[]
    // }

    // let result:ICategoryPO[] = []
    // let current: ICategoryPO

    // categories.map((cat) => {
    //   current = {...cat, ProductOptions: []}
    //   console.log(current)
    //   return(
    //     cat?.Products.map((prod) => {
    //       return(
    //         prod.ProductOptions.map(po => {
    //           current.ProductOptions = [...current.ProductOptions, po]
    //           console.log("RESULT", [...result, current])
    //           return(
    //             result = [...result, current]
    //           )
    //         })
    //       )
    //     })
    //   )
    // })


    return JSON.parse(JSON.stringify(categories))
  }

  async getOneCategory(category_slug: string): Promise<any> {

    const categories = await Category.findOne({
      where: { category_slug: category_slug },
      include: {
        all: true,
        nested: true
      }
    });
    return JSON.parse(JSON.stringify(categories))
  }

  async getOneCategoryWithOptions(category_slug: string): Promise<any> {

    const options = await ProductOptions.findAll({
      include: [{
        model: Product,
        required: true,
        include: [{
          model: Category,
          required: true,
          where: {category_slug: category_slug}
        }]
      }, {
        model: ProductOptionsImages,
        where: {main_image: true}
      }]
    })
    console.log(123333)


    return JSON.parse(JSON.stringify(options))
  }

  async getAllCategoriesWithOptions(): Promise<any> {

    const options = await ProductOptions.findAll({
      include: [{
        model: Product,
        include: [{
          model: Category,
        }]
      }]
    })
    
    const result: any = {}

    return JSON.parse(JSON.stringify(options))
  }


}

export default new CategoryService();