import { IdeatDto } from './dto/idea.dto';
import { Controller, Delete, Get, Post, Put, Body, Param } from '@nestjs/common';
import { IdeasService } from './ideas.service';

@Controller('ideas')
export class IdeasController {

    constructor(private ideasService: IdeasService){}

    @Get()
    showAllIdeas(){
        return this.ideasService.showAll();
    }

    @Post()
    createIdea(@Body() data: IdeatDto){
        return this.ideasService.create(data);
    }

    @Get(':id')
    showOneIdea(@Param('id') id: string){
        return this.ideasService.showOne(id);
    }

    @Put(':id')
    updateIdea(){}

    @Delete(':id')
    destroyIdea(){}
}
