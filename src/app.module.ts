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
import { TodosModule } from './todos/todos.module';
// import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DogsController } from './dogs/dogs.controller';
import { DogsService } from './dogs/dogs.service';
import { DogsModule } from './dogs/dogs.module';

@Module({
  // imports: [ItemsModule,TypeOrmModule.forRoot(), IdeasModule, TodosModule, AuthModule, UsersModule ],
  imports: [ItemsModule,TypeOrmModule.forRoot(), IdeasModule, TodosModule, UsersModule, DogsModule ],
  controllers: [AppController, ItemsController, DogsController],
  providers: [AppService, ItemsService, DogsService],
})
export class AppModule {}
