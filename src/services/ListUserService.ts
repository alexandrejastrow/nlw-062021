import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from "class-transformer";
export class ListUserService{

    async execute() {
        const usersRepo = getCustomRepository(UsersRepositories)

        const users = await usersRepo.find()

        return classToPlain(users)
    }
}