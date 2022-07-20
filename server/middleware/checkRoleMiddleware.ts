const jwt = require('jsonwebtoken')
import { Request, Response, NextFunction } from 'express';

export default function(role:string) {
    return function (req:Request, res:Response, next: NextFunction):any {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = (req.headers.authorization as string).split(' ')[1] // Bearer asfasnfkajsfnjk
            if (!token) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== role) {
                return res.status(403).json({message: "Нет доступа"})
            }
            req.body.user = decoded;
            next()
        } catch (e) {
            res.status(401).json({message: "Не авторизован"})
        }
    };
}



