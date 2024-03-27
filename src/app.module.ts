import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { BasicTutorialModule } from './basic-tutorial/basic-tutorial.module';
import { AdvancedTutorialModule } from './advanced-tutorial/advanced-tutorial.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [TerminusModule, HttpModule, AuthModule, UsersModule, BasicTutorialModule, AdvancedTutorialModule, StatusModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
