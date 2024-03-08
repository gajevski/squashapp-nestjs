import { Controller, Get, Post, UseGuards, Request, BadRequestException, Body, Put } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtGuard } from './auth/jwt.auth.guard';
import { User } from './models/user';
import { users } from './users/users.service';
import { RegisterDTO } from './models/register';
import { BasicTutorialService, basicTutorialProgress } from './basic-tutorial/basic-tutorial.service';
import { UpdateBasicTutorialDto } from './models/update-basic-tutorial';
import { BasicTutorial } from './models/basic-tutorial';

@Controller()
export class AppController {
  constructor(private _healthCheckService: HealthCheckService, private _http: HttpHealthIndicator, private _authService: AuthService, private _basicTutorialService: BasicTutorialService) { }

  @Get('v1/status')
  @HealthCheck()
  statusCheck() {
    return this._healthCheckService.check([
      async () => this._http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/v1/auth/login')
  async login(@Request() req): Promise<{ access_token: string }> {
    return this._authService.login(req.user);
  }

  @Post('/v1/auth/register')
  async register(@Body() registerDTO: RegisterDTO): Promise<{ access_token: string }> {
    const { username, password, confirmPassword } = registerDTO;

    if (!username || !password) {
      throw new BadRequestException('Username and password are required');
    }
    if (password !== confirmPassword) {
      throw new BadRequestException('Passwords do not match');
    }

    return this._authService.register(username, password);
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
  @Get('/v1/basic-tutorial/progress')
  async getAdvancedTutorialProgress(@Request() req) {
    // TODO: fix type
    return basicTutorialProgress.find((advancedTutorial: any) => advancedTutorial.userId === req.user.userId);
  }

  @UseGuards(JwtGuard)
  @Get('/v1/user/profile')
  getProfile(@Request() req): User | undefined {
    return users.find((user: User) => user.userId === req.user.userId);
  }
}
