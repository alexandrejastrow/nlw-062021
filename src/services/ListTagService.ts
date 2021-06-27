import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";

export class ListTagService{

    async execute() {
        const tagsRepo = getCustomRepository(TagsRepositories)

        const tags = await tagsRepo.find()

        return classToPlain(tags)
    }
}