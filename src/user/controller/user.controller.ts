import { Body, Controller, Post } from '@nestjs/common'
import { BaseResponse } from '../../common/controller/base.response'
import { UserService } from '../service/user.service'
import { UserCreateDto, UserCreateResponseDto } from './dto/user.create.dto'

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/join')
    async join(
        @Body() userCreateDto: UserCreateDto,
    ): Promise<BaseResponse<UserCreateResponseDto>> {
        const createdUser = await this.userService.create(
            await userCreateDto.toEntity(),
        )

        return BaseResponse.OK_WITH(UserCreateResponseDto.from(createdUser))
    }
}
