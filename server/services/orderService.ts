import { v4 as uuidv4 } from 'uuid';
import path from 'path'
import { Op } from 'sequelize'
import { IOrderInput, Order } from '../models/orders';
import { ProductOptions } from '../models/product_options';
import ApiError from '../error/ApiError';
import { Product } from '../models/product';



class OrderService {

  constructor() { }

  async create(dto: IOrderInput) {
    const order = await Order.create({ ...dto })
    return JSON.parse(JSON.stringify(order))
  };


  async delete(id: number) {
    await Order.destroy({ where: { id } })
  };

  async getAll(): Promise<any> {
    const order = await Order.findAll({include: [{ model: ProductOptions, include: [{model: Product}] }]});
    return JSON.parse(JSON.stringify(order))
  }

  async createOptionsRelationship(orderId: number, optionIds: number[]) {

    try {
      const order = await Order.findOne({ where: { id: orderId }, include: [{ model: ProductOptions }] })
      const options = await ProductOptions.findAll({ where: { id: { [Op.in]: optionIds } } });

      let ids: number[] = [];

      // order?.ProductOptions.forEach(i => {
      //   ids.push(i.id)
      // })

      options?.forEach(i => {
        ids.push(i.id)
      })

      const result = await order?.$set('ProductOptions', [...ids])

      return await Order.findOne({ where: { id: orderId }, include: [{ model: ProductOptions, include: [{model: Product}] }] });
    }
    catch (error) {
      throw ApiError.badRequest(`Ошибка при создании связи Product и  Category: ${error}`)
    }
  }

}

export default new OrderService();