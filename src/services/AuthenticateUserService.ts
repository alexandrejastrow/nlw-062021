import { compare } from "bcryptjs"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { sign } from 'jsonwebtoken'

interface IAutenticateRequest{
    email: string,
    password: string
}

export class AuthenticateUserService{
    async execute({email, password}: IAutenticateRequest) {
        
        const userRepositories = getCustomRepository(UsersRepositories)

        const user = await userRepositories.findOne({ email })
        
        if (!user) {
            throw new Error('Deu ruim no email ou senha ae!!!')
        }

        
        const flag = await compare(password, user.password)

        if (!flag) {
             throw new Error('Deu ruim no email ou senha ae!!!')
        }

        const token = sign({
            email: user.email
        },
            "preguiça de ir pegar MD5",
            {
                subject: user.id,
                expiresIn: '1d'
        }
        )
        
        return token
    }
}