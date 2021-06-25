import { getCustomRepository } from "typeorm";
import {TagsRepositories} from "../repositories/TagsRepositories"
export class CreateTagService{

    async execute(name: string) {

        const tagRepository = getCustomRepository(TagsRepositories)

        if (!name) {
            throw new Error("incorrect name!")
        }

        const tagAlreadyExists = await tagRepository.findOne({
            name
        })

        if (tagAlreadyExists) {
            throw new Error("tag existe ja!!!")
        }

        const tag = tagRepository.create({ name })
        
        await tagRepository.save(tag)
        
        return tag
    }
}