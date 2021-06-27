import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string
}

export function ensureAuthenticate(req: Request, res: Response, next: NextFunction) {
    
    const authtoken = req.headers.authorization

    if (!authtoken) {
        return res.status(401).json().end()
    }
    const [, token] = authtoken.split(" ")

    try {
        
        const { sub } = verify(token, "preguiça de ir pegar MD5") as IPayload
        req.user_id = sub
        
        return next()
    } catch (e) {
        return res.status(401).json().end()
    }
    
}