import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

export class CreateTagController{

    async handle(req: Request, res: Response) {
        
        const createTagService = new CreateTagService()

        const { name } = req.body
        
        const tag = await createTagService.execute(name)

        return res.json(tag)
    }
}