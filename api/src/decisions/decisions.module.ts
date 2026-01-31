import { Module } from '@nestjs/common';
import { DecisionsService } from './decisions.service';
import { DecisionsController } from './decisions.controller';

@Module({
  controllers: [DecisionsController],
  providers: [DecisionsService],
})
export class DecisionsModule {}
