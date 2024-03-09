import { Injectable } from '@nestjs/common';
import { AdvancedTutorial } from 'src/models/advanced-tutorial';

export const advancedTutorialProgress: AdvancedTutorial[] = [
  {
    userId: 1,
    one: false,
    two: false,
    three: false,
    four: false
  }
]

@Injectable()
export class AdvancedTutorialService {

  async updateAdvancedTutorialProgress(userId: number, advancedTutorialRequest: AdvancedTutorial): Promise<any | null> {
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
