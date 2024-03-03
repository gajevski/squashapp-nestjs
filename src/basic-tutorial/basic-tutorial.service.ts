import { Injectable } from '@nestjs/common';

export const progress = [
    {
        userId: 1,
        isServeFinished: false,
        isRallyFinished: false,
        isBalloutFinished: false,
        isScoringFinished: false
    }
]

@Injectable()
export class BasicTutorialService {}
