import { DogsService } from './dogs.service';
import { DogsController } from './dogs.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
