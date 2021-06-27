import { Request, Response } from "express";
import { ListUserSenderComplimentsService } from "../services/ListUserSenderComplimentsService";


export class ListUserSenderComplimentsController{

    async handle(req: Request, res: Response) {
        
        const listUserSendCompliment = new ListUserSenderComplimentsService()

        const compliments = await listUserSendCompliment.execute(req.user_id)

        return res.json(compliments)
    }
}