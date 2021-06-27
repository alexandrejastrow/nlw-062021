import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagService";

export class ListTagController{

    async handle(req: Request, res: Response) {
        
        const tagService = new ListTagService()

        const tags = await tagService.execute()

        return res.json(tags)
    }
}