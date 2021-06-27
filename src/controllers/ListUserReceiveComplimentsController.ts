import { Request, Response } from "express";
import { ListUserReciveComplimentsService } from "../services/ListUserReciveComplimentsService";



export class ListUserReceiveComplimentsController{

    async handle(req: Request, res: Response) {
        
        const listUserReceiveCompliment = new ListUserReciveComplimentsService()

        const compliments = await listUserReceiveCompliment.execute(req.user_id)
        return res.json(compliments)
    }
}