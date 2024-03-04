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
export class BasicTutorialService {

  async updateBasicTutorialProgress(basicTutorialRequest: BasicTutorial): Promise<BasicTutorial | null> {
    const progressToUpdateIndex: number = progress.findIndex((basicTutorial: BasicTutorial) => basicTutorial.userId === basicTutorialRequest.userId);

    if (progressToUpdateIndex !== -1) {
      const currentProgress: BasicTutorial = progress[progressToUpdateIndex];
      const updatedProgress = {
        ...currentProgress,
        ...basicTutorialRequest,
      };
      progress[progressToUpdateIndex] = updatedProgress;
      return updatedProgress;
    } else {
      console.error(`User with ID ${basicTutorialRequest.userId} not found.`);
      return null;
    }
  }
}
