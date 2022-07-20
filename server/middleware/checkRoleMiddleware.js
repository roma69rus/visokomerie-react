"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
function default_1(role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1]; // Bearer asfasnfkajsfnjk
            if (!token) {
                return res.status(401).json({ message: "Не авторизован" });
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            if (decoded.role !== role) {
                return res.status(403).json({ message: "Нет доступа" });
            }
            req.body.user = decoded;
            next();
        }
        catch (e) {
            res.status(401).json({ message: "Не авторизован" });
        }
    };
}
exports.default = default_1;
