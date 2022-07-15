import { Request, Response, NextFunction } from 'express';
import ApiError from '../error/ApiError';
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
import models from '../models/models';


const generateJwt = (id:string, email:string, role:string) => {
  return jwt.sign(
      {id, email, role},
      process.env.SECRET_KEY,
      {expiresIn: '24h'}
  )
}

class UserController {
  
  constructor(){

  }

  async registration (req:Request, res:Response, next: NextFunction):Promise<any> {
    try {
      const {email, password, role} = req.body
      if (!email || !password) {
        return next(ApiError.badRequest('Некорректный email или пароль'));
      }
  
      const candidate = await models.User.findOne({where: {email: email}})
      if (candidate) {
          return next(ApiError.badRequest('Пользователь с таким email уже существует'))
      }
  
      const hashPassword = await bcrypt.hash(password, 5)
      const user = await models.User.create({email, role, password: hashPassword})
      const id = user.get('id');
      const token = generateJwt(id as string, email, role)
      
      return res.json({token});      
    } catch (error) {
      next (ApiError.internal(`Ошибка на сервере при регистрации нового пользователя: \n${error}`))
    }   
  }

  async login(req:Request, res:Response, next: NextFunction):Promise<any> {
    try {
      const {email, password} = req.body
      
      const user = await models.User.findOne({where: {email}})
      const id = user?.get('id');
      const role = user?.get('role');
      const pass  = user?.get('password');
  
      if (!user) {
          return next(ApiError.badRequest('Пользователь не найден'))
      }
      let comparePassword = bcrypt.compareSync(password, pass)
      if (!comparePassword) {
          return next(ApiError.badRequest('Указан неверный пароль'))
      }
      const token = generateJwt(id as string, email, role as string)
      return res.json({token})
    } catch (error) {
      next (ApiError.internal(`Ошибка в операции LOGIN на сервере: \n${error}`))
    }
    
  }

  async check(req:Request, res:Response, next: NextFunction):Promise<any> {
      const token = generateJwt(req.body.user.id, req.body.user.email, req.body.user.role)
      return res.json({token})
  }  
  
}

export default new UserController();