import { UserEntity } from './entities/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get()
    findAll(@Query('name') name?:string): UserEntity[]{
        return this.usersService.getAll(name);
    }

    @Get(':id')
    findByOne(@Param('id') id:string): UserEntity{
        return this.usersService.getOne(Number(id));
    }

    @Post()
    createUser(@Body() body:CreateUserDTO): UserEntity{
        return this.usersService.create(body);
    }
}
