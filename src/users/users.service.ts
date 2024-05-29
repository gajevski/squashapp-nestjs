import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user';
import fs from 'fs';
import path from 'path';

const DB_PATH = path.resolve(__dirname, '..', 'db.json');

let users: User[] = [];

try {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    users = JSON.parse(data);
} catch (error) {
    console.error('Failed to read or parse db.json', error);
}

@Injectable()
export class UsersService {

    async findUser(username: string): Promise<User | undefined> {
        return users.find((user: User) => user.username === username);
    }

    async createUser(username: string, password: string): Promise<User> {
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            throw new Error('User already exists');
        }

        const newUser: User = this._createUserObject(username, password);

        users.push(newUser);

        try {
            fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2));
        } catch (error) {
            console.error('Failed to write to db.json', error);
            throw new Error('Failed to save user');
        }

        return newUser;
    }

    private _createUserObject(username: string, password: string): User {
        return {
            userId: Date.now(),
            username: username,
            password: password,
            image: "",
            racket: null,
            statistics: {
                matchesPlayed: 0,
                matchesWon: 0,
                matchesLost: 0,
            },
            activities: []
        };
    }
}
