import { Dog } from './interface/dogs.interface';
import { DogsService } from './dogs.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('dogs')
export class DogsController {

    constructor(private dogsService: DogsService){};

    @Get()
    findAll():Dog[] {
        return this.dogsService.getAll();
    }

    @Get(':id')
    findOne(@Param('id') id:string ):Dog {
        return this.dogsService.getOne(id);
    }
}
