import { Module } from '@nestjs/common';
import { BasicTutorialService } from './basic-tutorial/basic-tutorial.service';

@Module({
  providers: [BasicTutorialService]
})
export class BasicTutorialModule {}
