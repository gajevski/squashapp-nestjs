import { Module } from '@nestjs/common';
import { BasicTutorialService } from './basic-tutorial.service';
import { BasicTutorialController } from './basic-tutorial.controller';

@Module({
  providers: [BasicTutorialService],
  exports: [BasicTutorialService],
  controllers: [BasicTutorialController]
})
export class BasicTutorialModule {}
