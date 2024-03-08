import { Module } from '@nestjs/common';
import { BasicTutorialService } from './advanced-tutorial.service';

@Module({
  providers: [BasicTutorialService],
  exports: [BasicTutorialService]
})
export class BasicTutorialModule {}
