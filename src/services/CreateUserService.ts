
import {getCustomRepository} from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from 'bcryptjs'

interface IUserRequest{
    name: string,
    email: string,
    admin?: boolean,
    password: string
}
export class CreateUserService{
    async execute({ name, email, admin = false, password }: IUserRequest) {
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

        const passwdHash = await hash(password, 8)

        const user = usersRepositories.create(
            {
                name,
                email,
                admin,
                password: passwdHash
            }
        )
        
        await usersRepositories.save(user)

        return user
    }
}