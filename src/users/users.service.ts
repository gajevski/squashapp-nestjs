import { Injectable } from '@nestjs/common';

export interface User {
    userId: number
    username: string
    password: string
    image: string
    racket: Racket
    statistics: Statistics
    activities: Activity[]
}

export interface Racket {
    name: string
    image: string
    purchaseDate: string
    totalMatchesPlayed: number
    grip: string
    string: string
}

export interface Statistics {
    matchesPlayed: number
    matchesWon: number
    matchesLost: number
    winratio: number
}

export interface Activity {
    id: number
    activityName: string
    date: string
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            userId: 1,
            username: "First",
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

    async findUser(username: string): Promise<User | undefined> {
        return this.users.find((user: User) => user.username === username);
    }
}
