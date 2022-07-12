import { Request, Response, NextFunction } from 'express';
import ApiError from '../error/ApiError';

class UserController {
  
  constructor(){

  }
  
  async login(req:Request, res:Response): Promise<void> {
    
  };

  async check(req:Request, res:Response, next: NextFunction):Promise<void> {
    const {id} = req.query;
    if (!id) {
      return next(ApiError.badRequest('ID не задан'))
    }
    res.json(id)
  }
}

export default new UserController();