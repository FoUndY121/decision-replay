import {
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class CreateReplaysDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  whatHappened?: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  whatIThought?: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  whatIMissed?: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  lessons?: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  nextTime?: string;
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5) // или 10 — как решишь
  score?: number;
}
