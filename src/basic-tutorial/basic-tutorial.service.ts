import { Injectable } from '@nestjs/common';
import { BasicTutorial } from 'src/models/basic-tutorial';

export const basicTutorialProgress: BasicTutorial[] = [
  {
    userId: 1,
    isServeFinished: false,
    isRallyFinished: false,
    isBalloutFinished: false,
    isScoringFinished: false
  }
]

@Injectable()
export class BasicTutorialService {

  async updateBasicTutorialProgress(userId: number, basicTutorialRequest: BasicTutorial): Promise<BasicTutorial | null> {
    const progressToUpdateIndex: number = basicTutorialProgress.findIndex((basicTutorial: BasicTutorial) => basicTutorial.userId === userId);

    if (progressToUpdateIndex !== -1) {
      const currentProgress: BasicTutorial = basicTutorialProgress[progressToUpdateIndex];
      const updatedProgress = {
        ...currentProgress,
        ...basicTutorialRequest,
      };
      basicTutorialProgress[progressToUpdateIndex] = updatedProgress;
      return updatedProgress;
    } else {
      console.error(`User with ID ${basicTutorialRequest.userId} not found.`);
      return null;
    }
  }
}
