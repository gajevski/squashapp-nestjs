import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class UpdateAdvancedTutorialDto {
  @IsInt()
  userId: number;

  @IsOptional()
  @IsBoolean()
  one?: boolean;

  @IsOptional()
  @IsBoolean()
  two?: boolean;

  @IsOptional()
  @IsBoolean()
  three?: boolean;

  @IsOptional()
  @IsBoolean()
  four?: boolean;
}