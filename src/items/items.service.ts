import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { arr } from './hardcodes/items';

@Injectable()
export class ItemsService {
    // properties
    private readonly items: Item[] = arr;

    //methods
    findAll():Item[] {
        return this.items
    }

    findOne(id:string): Item {
        return this.items.find(item => item.id == id);
    }

}
