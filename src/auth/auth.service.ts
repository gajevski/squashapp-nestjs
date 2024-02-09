import { Injectable } from '@nestjs/common';
import { User, UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private _usersService: UsersService) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user: User | undefined = await this._usersService.findUser(username);
        
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
