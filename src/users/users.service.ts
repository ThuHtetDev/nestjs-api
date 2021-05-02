import { from, Observable } from 'rxjs';
import { UserEntity } from './entities/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { map } from 'rxjs/operators';// This is where I import map operator


@Injectable()
export class UsersService {
    // private users: UserEntity[] = [
    //     {
    //         id:1,
    //         name: 'thuhtettun'
    //     },
    //     {
    //         id:2,
    //         name: 'markopolo'
    //     }
    // ]
    constructor(@InjectRepository(UserEntity) private readonly usersRepository: Repository<UserEntity> ){}

    async getAll(): Promise<Observable<UserEntity[]>>{
        // if(name) return await this.usersRepository.filter(user => user.name == name);

        return from(this.usersRepository.find()).pipe(
               map( (users: UserEntity[]) => {
                   users.forEach(function (v) {
                       delete v.password 
                   });
                   return users;
               })
           );

        // if(name) return await this.usersRepository.findOne({ where: {name} });
        // return await this.usersRepository.find();
    }

    async getOne(id){
        // return this.usersRepository.find(user => user.id === id);
        return await this.usersRepository.findOne({ where:{id} });
    }


    // create(data: CreateUserDTO): UserEntity{
    //     const user = {id: Date.now(),...data};
    //     this.usersRepository.push(user);
    //     return user;
    // }
    async create(data: CreateUserDTO){
        let created = await this.usersRepository.create(data);
        await this.usersRepository.save(created);
        return created;
    }
}
