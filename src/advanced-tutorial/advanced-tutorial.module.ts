import { Module } from '@nestjs/common';
import { AdvancedTutorialService } from './advanced-tutorial.service';
import { AdvancedTutorialController } from './advanced-tutorial.controller';

@Module({
  providers: [AdvancedTutorialService],
  exports: [AdvancedTutorialService],
  controllers: [AdvancedTutorialController]
})
export class AdvancedTutorialModule {}
