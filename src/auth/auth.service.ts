import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/models/user';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private _usersService: UsersService,
        private _jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user: User | undefined = await this._usersService.findUser(username);

        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: User): Promise<{ access_token: string }> {
        const payload = { username: user.username, sub: user.userId }
        return {
            access_token: this._jwtService.sign(payload)
        }
    }
}
