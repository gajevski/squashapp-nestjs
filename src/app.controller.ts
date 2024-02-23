import { Controller, Get, Post, UseGuards, Request, BadRequestException, Body } from '@nestjs/common';
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtGuard } from './auth/jwt.auth.guard';
import { User } from './models/user';
import { users } from './users/users.service';
import { RegisterDTO } from './models/register';

@Controller()
export class AppController {
  constructor(private _healthCheckService: HealthCheckService, private _http: HttpHealthIndicator, private _authService: AuthService) { }

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
  @Get('/v1/user/profile')
  getProfile(@Request() req): User | undefined {
    return users.find((user: User) => user.userId === req.user.userId);
  }
}
