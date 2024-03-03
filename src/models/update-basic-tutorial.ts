import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class UpdateBasicTutorialDto {
  @IsInt()
  userId: number;

  @IsOptional()
  @IsBoolean()
  isServeFinished?: boolean;

  @IsOptional()
  @IsBoolean()
  isRallyFinished?: boolean;

  @IsOptional()
  @IsBoolean()
  isBalloutFinished?: boolean;

  @IsOptional()
  @IsBoolean()
  isScoringFinished?: boolean;
}