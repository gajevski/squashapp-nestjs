import { Injectable } from '@nestjs/common';
import { BasicTutorial } from 'src/models/basic-tutorial';

export const progress: BasicTutorial[] = [
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
