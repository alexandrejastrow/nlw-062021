import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
export class ListUserSenderComplimentsService{
    
    async execute(user_id: string) {
    
        const complimentsRepositorie = getCustomRepository(ComplimentsRepositories)
        
        const compliments = await complimentsRepositorie.find({
            where: {
                user_sender: user_id
            },
            relations: ['userReciver', 'userSender', 'tag']
        })

        const compl = compliments.map( v => {
            delete v.userReciver.password
            delete v.userSender.password

            return v
        })
        
        return compl
    }
}