import {
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class UpdateReplayDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  whatHappened?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  whatIThought?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  whatIMissed?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  lessons?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  nextTime?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  score?: number;
}
