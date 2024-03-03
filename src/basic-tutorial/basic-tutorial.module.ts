import { Module } from '@nestjs/common';
import { BasicTutorialService } from './basic-tutorial.service';

@Module({
  providers: [BasicTutorialService],
  exports: [BasicTutorialService]
})
export class BasicTutorialModule {}
