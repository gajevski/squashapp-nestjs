import { Injectable } from '@nestjs/common';

export type User = {
    userId: number;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            userId: 1,
            username: "First",
            password: "first"
        },
        {
            userId: 2,
            username: "Second",
            password: "second"
        }
    ]

}
