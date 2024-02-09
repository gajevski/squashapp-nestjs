import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import { User } from './users/users.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private health: HealthCheckService, private http: HttpHealthIndicator) {}

  @Get('v1/squash/status')
  @HealthCheck()
  statusCheck() {
    return this.health.check([
      async () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/v1/auth/login')
  async login(@Request() req): Promise<User> {
    return req.user
  }
}
