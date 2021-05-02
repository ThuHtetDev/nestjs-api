import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Dog } from './interface/dogs.interface';

@Injectable()
export class DogsService {
    private readonly dogs: Dog[] = [
        {
            id: "223422",
            name: "mae lone",
            color: "black",
            age: 5
        },
        {
            id:"768546",
            name: "aung net",
            color: "brown",
            age: 3
        }
    ];

    getAll(): Dog[] {
        return this.dogs;
    }

    getOne(id:string): Dog{
        const dog = this.dogs.find(dog => dog.id == id);
        if(!dog) throw new HttpException('Not Found Dog',HttpStatus.NOT_FOUND);
        return dog;
    }
}
