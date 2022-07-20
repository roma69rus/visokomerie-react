import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken')

export default function (req:Request, res:Response, next: NextFunction):any {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        const token:string = (req.headers.authorization as string).split(' ')[1] // Bearer asfasnfkajsfnjk
        
        if (!token) {
            return res.status(401).json({message: "Не авторизован"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.body.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: "Не авторизован"})
    }
};
