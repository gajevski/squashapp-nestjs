import { Controller, Get, UseGuards, Request, Body, Put } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import { JwtGuard } from './auth/jwt.auth.guard';
import { User } from './models/user';
import { users } from './users/users.service';

@Controller()
export class AppController {
  constructor(private _healthCheckService: HealthCheckService, private _http: HttpHealthIndicator) { }

  @Get('v1/status')
  @HealthCheck()
  statusCheck() {
    return this._healthCheckService.check([
      async () => this._http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }

  @UseGuards(JwtGuard)
  @Get('/v1/user/profile')
  getProfile(@Request() req): User | undefined {
    return users.find((user: User) => user.userId === req.user.userId);
  }
}
