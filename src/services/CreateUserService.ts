
import {getCustomRepository} from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest{
    name: string,
    email: string,
    admin?: boolean
}
export class CreateUserService{
    async execute({ name, email, admin}: IUserRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories)

        if (!email) {
            throw new Error("email incorreto manolo...")
        }
        const userAlreadExists = await usersRepositories.findOne({
            email
        })

        if (userAlreadExists) {
            throw new Error("ja existe ae manolo....")
        }

        const user = usersRepositories.create({ name, email, admin })
        
        await usersRepositories.save(user)

        return user
    }
}