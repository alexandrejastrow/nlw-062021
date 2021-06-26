import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

export class AuthenticateUserController{
    async handle(req: Request, res: Response) {
        const { email, password } = req.body
        
        const authenticate = new AuthenticateUserService()

        const token = await authenticate.execute({email, password})

        return res.json(token)
    }
}