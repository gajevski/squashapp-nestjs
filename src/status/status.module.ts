import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule],
  controllers: [StatusController]
})
export class StatusModule {}
