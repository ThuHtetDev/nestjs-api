import { UserEntity } from './entities/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users: UserEntity[] = [
        {
            id:1,
            name: 'thuhtettun'
        },
        {
            id:2,
            name: 'markopolo'
        }
    ]
    getAll(name?:string): UserEntity[]{
        if(name) return this.users.filter(user => user.name == name);

        return this.users;
    }

    getOne(id): UserEntity{
        return this.users.find(user => user.id === id);
    }

    create(data: CreateUserDTO): UserEntity{
        const user = {id: Date.now(),...data};
        this.users.push(user);
        return user;
    }
}
