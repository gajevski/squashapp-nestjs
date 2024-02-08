import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [UserModule, TerminusModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
