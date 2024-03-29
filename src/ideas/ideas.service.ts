import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IdeaEntity } from './idea.entity';
import { IdeatDto } from './dto/idea.dto';

@Injectable()
export class IdeasService {
    constructor(
        @InjectRepository(IdeaEntity)
        private ideaRepository: Repository<IdeaEntity>
    ){}

    // show all
    async showAll(){
        return await this.ideaRepository.find();
    }

    // create
    async create(data: IdeatDto){
        let created = await this.ideaRepository.create(data);
        await this.ideaRepository.save(created);
        return created;
    }

    // detail
    async showOne(id:string){
        const idea = await this.ideaRepository.findOne({ where: {id} });
        if(!idea){
            throw new HttpException('Not Found',HttpStatus.NOT_FOUND);
        }
        return idea;
    }

    // update
    async update(id:string,data: IdeatDto){
        const idea = await this.ideaRepository.findOne({where:{id}});
        if(!idea){
            throw new HttpException('Not Found',HttpStatus.NOT_FOUND);
        }
        await this.ideaRepository.update({id},data);
        return idea;
    }

    // delete
    async delete(id:string){
        const idea = await this.ideaRepository.findOne({where:{id}});
        if(!idea){
            throw new HttpException('Not Found',HttpStatus.NOT_FOUND);
        }
        await this.ideaRepository.delete({id});
        return idea;
    }
}
