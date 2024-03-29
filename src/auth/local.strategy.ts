import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { User } from "src/models/user";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor (private _authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const user: Promise<User> = this._authService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}