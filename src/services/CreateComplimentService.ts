import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest{

    tag_id: string
    user_sender: string
    user_receiver: string
    message: string
}

export class CreateComplimentService{
    async execute({
        tag_id,
        user_sender,
        user_receiver,
        message
    }: IComplimentRequest) {
        
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const userRepository = getCustomRepository(UsersRepositories)

        if (user_sender === user_receiver) {
            throw new Error('auto elogia eh cringe!!!')
        }
        const userReciverExists = await userRepository.findOne(user_receiver)

        if (!userReciverExists) {
            throw new Error('usuario sumiu!!!')
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepositories.save(compliment)

        return compliment
    }
}