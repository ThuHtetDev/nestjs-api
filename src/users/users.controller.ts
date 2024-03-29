import { UserEntity } from './entities/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get()
    findAll(){
        return this.usersService.getAll();
    }
    // findAll(@Query('name') name?:string){
    //     return this.usersService.getAll(name);
    // }

    @Get(':id')
    findByOne(@Param('id',ParseIntPipe) id:number){
        // ParseIntPipe (auto change type of id to number)
        const user = this.usersService.getOne(Number(id));
        if(!user) throw new NotFoundException();

        return user;
    }

    @Post()
    createUser(@Body() body:CreateUserDTO){
        return this.usersService.create(body);
    }
}
