import jwt from 'jsonwebtoken';
import fs from 'fs';

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const validateJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        try {
            const token = authHaeder.split(' ')[1];
            jwt.verify()
        } catch (e) {
            console.error(e);
            res.sendStatus(401);
        }
    }
}

const 