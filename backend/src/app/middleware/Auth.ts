import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

class Auth{
  secretKey: any = process.env.SECRET_KEY; 

  authenticateUser(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.sendStatus(401); // Unauthorized
    }
    jwt.verify(token, this.secretKey, (err: any, user: any) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
      
    });
    
  }

}

export default new Auth();