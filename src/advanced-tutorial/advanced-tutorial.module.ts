import { Module } from '@nestjs/common';
import { AdvancedTutorialService } from './advanced-tutorial.service';

@Module({
  providers: [AdvancedTutorialService],
  exports: [AdvancedTutorialService]
})
export class AdvancedTutorialModule {}
