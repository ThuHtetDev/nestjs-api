import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    // contruct service
    constructor(private readonly itemsService: ItemsService){} 

    @Get()
    findAll():Item[] {
        return this.itemsService.findAll();
    }

    @Post()
    @HttpCode(201)
    create(@Body() createItemDto:CreateItemDto):string {
        return `Name: ${createItemDto.name} Price: ${createItemDto.price}`;
    }

    @Get(':item')
    findOne(@Param() param):Item {
        return this.itemsService.findOne(param.item);
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
