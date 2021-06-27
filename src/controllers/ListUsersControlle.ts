import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";

export class ListUsersController{

    async handle(req: Request, res: Response) {
        
        const usersService = new ListUserService()

        const users = await usersService.execute()

        return res.json(users)
    }
}