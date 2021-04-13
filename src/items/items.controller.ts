import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
    @Get()
    findAll():string {
        return 'get all items';
    }

    @Post()
    @HttpCode(201)
    create(@Body() createItemDto:CreateItemDto):string {
        return `Name: ${createItemDto.name} Price: ${createItemDto.price}`;
    }

    @Get(':item')
    findOne(@Param() param):string {
        return `Item: ${param.item}`;
    }

    @Delete(':item')
    delete(@Param('item') item):string {
        return `Deleted ${item}`;
    }

    @Put(':item')
    update(@Param('item') item, @Body() updateItemDto: CreateItemDto):string {
        return `${item} -- ${updateItemDto.name}`
    }
}
