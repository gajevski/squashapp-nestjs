import { Controller, Get, UseGuards, Request, Body, Put } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import { JwtGuard } from './auth/jwt.auth.guard';
import { User } from './models/user';
import { users } from './users/users.service';
import { BasicTutorialService, basicTutorialProgress } from './basic-tutorial/basic-tutorial.service';
import { UpdateBasicTutorialDto } from './models/update-basic-tutorial';
import { BasicTutorial } from './models/basic-tutorial';

@Controller()
export class AppController {
  constructor(private _healthCheckService: HealthCheckService, private _http: HttpHealthIndicator, private _basicTutorialService: BasicTutorialService) { }

  @Get('v1/status')
  @HealthCheck()
  statusCheck() {
    return this._healthCheckService.check([
      async () => this._http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }


  @UseGuards(JwtGuard)
  @Put('/v1/basic-tutorial/progress')
  async updateBasicTutorialProgress(@Request() req, @Body() basicTutorialRequest: UpdateBasicTutorialDto) {
    return this._basicTutorialService.updateBasicTutorialProgress(req.user.userId, basicTutorialRequest);
  }

  @UseGuards(JwtGuard)
  @Get('/v1/basic-tutorial/progress')
  async getBasicTutorialProgress(@Request() req) {
    return basicTutorialProgress.find((basicTutorial: BasicTutorial) => basicTutorial.userId === req.user.userId);
  }


  @UseGuards(JwtGuard)
  @Get('/v1/user/profile')
  getProfile(@Request() req): User | undefined {
    return users.find((user: User) => user.userId === req.user.userId);
  }
}
