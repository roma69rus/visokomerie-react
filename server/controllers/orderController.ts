import { Request, Response, NextFunction } from 'express';
import ApiError from '../error/ApiError';
import { IOrderInput } from '../models/orders';
import orderService from '../services/orderService';

class OrderController {
  
  constructor(){

  }
  
  async create(req:Request, res:Response, next: NextFunction): Promise<any> {
    try {
      const {name, phone, ids} = req.body

      let idsArray:number[] = []

      for (var key in ids) {
        if (ids.hasOwnProperty(key)) {
          const value = Number(ids[key]);
          idsArray.push(value)
        }
      }
      const order = await orderService.create({name, phone})

      console.log("order.id, ids", order.id, ids, Array.isArray(ids))

      const result = await orderService.createOptionsRelationship(order.id, ids)

      return res.json(result)  

    } catch (error) {
      next (ApiError.badRequest(`Ошибка при создании order: \n${error}`))
    }
    
  };
  
  async delete(req:Request, res:Response, next: NextFunction): Promise<any> {
    try {
      const {id}:IOrderInput = req.body
      
      const slide = await orderService.delete(Number(id))

      return res.json(slide)  

    } catch (error) {
      next (ApiError.badRequest(`Ошибка при создании order: \n${error}`))
    }
    
  };

  async getAll(req:Request, res:Response, next:NextFunction):Promise<any> {
    try {
      const slides = await orderService.getAll();
      return res.json(slides)      
    } catch (error) {
      next (ApiError.badRequest(`Ошибка при запросе order: \n${error}`))
    }
    
  }
}

export default new OrderController();