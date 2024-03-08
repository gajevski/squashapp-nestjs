import { Injectable } from '@nestjs/common';

// TODO: fix type
export const advancedTutorialProgress: any[] = [
  {
    userId: 1,
    isServeFinished: false,
    isRallyFinished: false,
    isBalloutFinished: false,
    isScoringFinished: false
  }
]

@Injectable()
export class AdvancedTutorialService {

  async updateAdvancedTutorialProgress(userId: number, advancedTutorialRequest: any): Promise<any | null> {
    const progressToUpdateIndex: number = advancedTutorialProgress.findIndex((advancedTutorial: any) => advancedTutorial.userId === userId);

    if (progressToUpdateIndex !== -1) {
      const currentProgress: any = advancedTutorialProgress[progressToUpdateIndex];
      const updatedProgress = {
        ...currentProgress,
        ...advancedTutorialRequest,
      };
      advancedTutorialProgress[progressToUpdateIndex] = updatedProgress;
      return updatedProgress;
    } else {
      console.error(`User with ID ${advancedTutorialRequest.userId} not found.`);
      return null;
    }
  }
}
