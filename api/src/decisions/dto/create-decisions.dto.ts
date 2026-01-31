import {
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class CreateDecisionDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  context?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  importance?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  confidence?: number;
}
