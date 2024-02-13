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

    //     Username: "Mikolaj",
    //     ID:       1,
    //     Image:    "https://avatars.githubusercontent.com/u/29663156?v=4",
    //     Racket: Racket{
    //         Name:                "Wilson Hyper Hammer 120",
    //         Image:               "https://www.squashtime.pl/images/thumbs/640_720/WRT967700_wilson_01.jpg",
    //         PurchaseDate:        "October 2023",
    //         PlayedMatchesAmount: 26,
    //         Grip:                "Toalson Ultra Grip 3Pack Black",
    //         String:              "Default",
    //     },
    //     Statistics: Statistics{
    //         MatchesPlayed: totalMatches,
    //         MatchesWon:    matchesWon,
    //         MatchesLost:   matchesLost,
    //         Winratio:      int(winratio),
    //     },
    //     Activities: []Activity{
    //         {Id: 1, ActivityName: "Squash Match", Date: "2023-10-01"},
    //         {Id: 2, ActivityName: "Training Session", Date: "2023-10-02"},
    //     },
    // }

    async findUser(username: string): Promise<User | undefined> {
        return this.users.find((user: User) => user.username === username);
    }
}
