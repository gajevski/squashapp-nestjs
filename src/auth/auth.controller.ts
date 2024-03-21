import { Controller, Post, UseGuards, Request, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { RegisterDTO } from 'src/models/register';

@Controller('v1/auth')
export class AuthController {
    constructor(private _authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req): Promise<{ access_token: string }> {
        return this._authService.login(req.user);
    }

    @Post('/register')
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
}
