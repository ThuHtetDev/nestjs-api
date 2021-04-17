import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeasModule } from './ideas/ideas.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [ItemsModule,TypeOrmModule.forRoot(), IdeasModule ],
  controllers: [AppController, ItemsController, UsersController],
  providers: [AppService, ItemsService, UsersService],
})
export class AppModule {}
