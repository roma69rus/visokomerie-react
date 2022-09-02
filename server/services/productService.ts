import { v4 as uuidv4 } from 'uuid';
import path from 'path'

import { IOptionsInput, ProductOptions } from '../models/product_options'
import { IProductInput, Product } from '../models/product'
import { IImagesInput, ProductOptionsImages } from '../models/product_images'
import { ICategoryInput, Category } from '../models/product_category'
import ApiError from '../error/ApiError';
import { Op } from 'sequelize'
import { json } from 'stream/consumers';



class productService {
  constructor() { }

  async createProduct(product: IProductInput): Promise<any> {
    const createdProduct = await Product.create(product)

    return createdProduct;
  };

  async updateProduct(product: IProductInput): Promise<any> {
    await Product.update(product, { where: { id: product.id } })
    return await Product.findOne({ where: { id: product.id } }) as Product
  };

  async deleteProduct(id: number): Promise<any> {
    // const prod = Product.findOne({where:{id}})
    // Product.beforeDestroy(async prod => {
    //   await ProductOptions.destroy({ where: { ProductId: prod.id } })
    // })
    return await Product.destroy({ where: { id }, individualHooks: true })
    // return await prod.destroy();
  };

  async createOptions(options: IOptionsInput, imgs: any): Promise<any> {

    let image = {} as IImagesInput;
    let createdImages = {} as Array<any>

    const createdOptions = await ProductOptions.create(options)

    let main_image: boolean = true;
    for (let i = 0; i < imgs.length; i++) {
      const img_path: string = uuidv4() + ".jpg";

      imgs[i].mv(path.resolve(__dirname, '..', 'static', img_path));
      image = { img_path, main_image, ProductOptionId: createdOptions.get('id') }

      // const res = await createdOptions.createProductOptionsImages(image) //не рботает
      const createdImage = await ProductOptionsImages.create(image)
      main_image = false;

      createdImages[i] = createdImage;
    }
    console.log("Created opt", createdOptions)
    return await Product.findOne({ where: { id: createdOptions.ProductId }, include: [{ model: ProductOptions, include: [{ model: ProductOptionsImages }] }] });
  }

  async updateOptions(options: IOptionsInput, imgs: any): Promise<any> {

    let image = {} as IImagesInput;
    let createdImages = {} as Array<any>

    await ProductOptions.update(options, { where: { id: options.id } })

    if (imgs) {
      let main_image: boolean = true;
      for (let i = 0; i < imgs.length; i++) {
        const img_path: string = uuidv4() + ".jpg";

        imgs[i].mv(path.resolve(__dirname, '..', 'static', img_path));
        image = { img_path, main_image, ProductOptionId: options!.id as number }

        // const res = await createdOptions.createProductOptionsImages(image) //не рботает
        const createdImage = await ProductOptionsImages.create(image)
        main_image = false;

        createdImages[i] = createdImage;
      }
    }


    return await ProductOptions.findOne({ where: { id: options.id } }) as ProductOptions
  }

  async updateImage(main_image: boolean, id: number): Promise<any> {

    const image = await ProductOptionsImages.findOne({ where: { id } })

    await ProductOptionsImages.update({ ...image, main_image: main_image }, { where: { id } })

    return await ProductOptionsImages.findOne({ where: { id } })
  }

  async deleteImage(id: number): Promise<any> {
    return await ProductOptionsImages.destroy({ where: { id } })
  }

  async deleteOptions(id: number): Promise<any> {
    return await ProductOptions.destroy({ where: { id } })
  }



  // async getAllProductsWithOptions(limit:number, page: number):Promise<any> {
  async getAllProductsWithOptions(): Promise<any> {

    // limit = limit || 100;   //по умолчанию 100 элементов на странице
    // page = page || 1        //по умолчанию первая страница

    // let offset: number = page * limit - limit

    const products = await Product.findAll({
      include: {
        all: true,
        nested: true
      }
    })

    // const products = await Product.findAll({
    //   include:[{
    //     model: ProductOptions, 
    //     required: false
    //   }
    // ]});

    // const product_options = await ProductOptions.findAndCountAll({
    //   include:[{
    //     model: ProductOptionsImages, 
    //     where: {main_image: true},
    //     required: false
    //   }],
    //   limit,
    //   offset
    // });

    // return {products, product_options}
    return products
  }

  async getAllOptions(ProductId: number, limit: number, page: number): Promise<any> {

    limit = limit || 100;   //по умолчанию 100 элементов на странице
    page = page || 1        //по умолчанию первая страница

    let offset: number = page * limit - limit

    if (ProductId) {
      return await ProductOptions.findOne({
        where: { ProductId: ProductId },
        include: {
          all: true,
          nested: true
        },
      })
    } else {
      return await ProductOptions.findAll({
        include: {
          all: true,
          nested: true
        },
        limit,
        offset
      })
    }
  }
  
  async getOneOption(OptionId: number): Promise<any> {

    return await ProductOptions.findOne({
      where: { id: OptionId },
      include: {
        all: true,
        nested: true
      },
    })

  }

  async getAllProducts(): Promise<any> {

    const products = await Product.findAll()
    // const result:any = {};

    // for (let i = 0; i < products.length; i++) {
    //   result[products[i]['id']] = products[i]
    // }

    return products

  }

  async getOptionsByProductName(product_slug: string, color: any, getAllimages: boolean, page: number, limit: number): Promise<any> {

    limit = limit || 100;   //по умолчанию 100 элементов на странице
    page = page || 1        //по умолчанию первая страница

    console.log("product_slug", product_slug);

    const offset: number = page * limit - limit

    let result: any = {};

    let arrayofBool: Array<boolean> = [true];

    getAllimages ? arrayofBool.push(false) : arrayofBool

    if (!color) {
      const productOpt = await Product.findOne({
        where: { product_slug: product_slug },
        include: [{
          model: ProductOptions,
          include: [{
            model: ProductOptionsImages,
            where: {
              main_image: {
                [Op.in]: arrayofBool
              }
            },
            required: false,
          }],
        }, {
          model: Category
        }],
        limit,
        offset
      });
      result = productOpt;
    }

    if (color) {
      // const options = await ProductOptions.findAll({
      //   where: {options_slug: color},
      //   include: [{
      //     model: Product,
      //     required: true,
      //     where: {product_slug: product_slug}
      //   }, {
      //     model: ProductOptionsImages,
      //   }]
      // })


      const productOpt = await Product.findOne({
        where: { product_slug: product_slug },
        include: [{
          model: ProductOptions,
          required: true,
          where: { options_slug: color },
          include: [{
            model: ProductOptionsImages,
            required: true
          }],
        }, {
          model: Category
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

  async createCategoryRelationship(productId: number, categoryId: number) {

    try {
      const product = await Product.findOne({ where: { id: productId }, include: [{ model: Category }] })
      const category = await Category.findOne({ where: { id: categoryId } });

      let ids: number[] = [];
      product?.Categories.forEach(i => {
        ids.push(i.id)
      })


      const result = await product?.$set('Categories', [...ids, category!.get('id')])

      return await Product.findOne({ where: { id: productId }, include: [{ model: Category }] });
    }
    catch (error) {
      throw ApiError.badRequest(`Ошибка при создании связи Product и  Category: ${error}`)
    }
  }
  async deleteCategoryRelationship(productId: number, categoryId: number) {

    try {
      const product = await Product.findOne({ where: { id: productId }, include: [{ model: Category }] })
      const category = await Category.findOne({ where: { id: categoryId } });

      let ids: number[] = [];
      product?.Categories.forEach(i => {
        ids.push(i.id)
      })

      const index = ids.indexOf((category as Category).id);
      if (index > -1) {
        ids.splice(index, 1)
      }

      await product?.$set('Categories', [...ids])

      return await Product.findOne({ where: { id: productId }, include: [{ model: Category }] });
    }
    catch (error) {
      throw ApiError.badRequest(`Ошибка при создании связи Product и  Category: ${error}`)
    }
  }
}

export default new productService();