import { Injectable } from '@nestjs/common'
import { User } from '../domain/user.entity'
import { UserRepository } from '../repository/user.repository'

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async create(user: User): Promise<User> {
        const finded = await this.userRepository.findOne({
            username: user.username,
        })

        if (finded) {
            throw new Error('username is already exists')
        }

        const createdUser = await this.userRepository.save(user)
        return createdUser
    }

    async updatePassword(userId: string, password: string): Promise<User> {
        const findedUser = await this.userRepository.findOne({
            id: userId,
        })

        if (!findedUser) {
            throw new Error('user is not exists')
        }

        await findedUser.setPassword(password)

        return await this.userRepository.save(findedUser)
    }
}
