import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user';

export const users: User[] = [
    {
        userId: 1,
        username: "first",
        password: "first",
        image: "https://avatars.githubusercontent.com/u/29663156?v=4",
        racket: {
            name: "Wilson Hyper Hammer 120",
            image: "https://www.squashtime.pl/images/thumbs/640_720/WRT967700_wilson_01.jpg",
            purchaseDate: "October 2023",
            totalMatchesPlayed: 26,
            grip: "Toalson Ultra Grip 3Pack Black",
            string: "Default"
        },
        statistics: {
            matchesPlayed: 10,
            matchesWon: 6,
            matchesLost: 4,
            winratio: 60,
        },
        activities: [
            { id: 1, activityName: "Squash Match", date: "2023-10-01" },
            { id: 2, activityName: "Training Session", date: "2023-10-02" }
        ]
    },
]

@Injectable()
export class UsersService {

    async findUser(username: string): Promise<User | undefined> {
        return users.find((user: User) => user.username === username);
    }

    async createUser(user: User): Promise<User> {
        const existingUser: User | undefined = await this.findUser(user.username);
        if (existingUser) {
          throw new Error('User already exists');
        }
        users.push(user);
        return user;
      }
}
