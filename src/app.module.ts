import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, TerminusModule, HttpModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
