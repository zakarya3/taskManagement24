import { IsEnum, IsOptional, IsString } from 'class-validator';
import { status_enum } from '../enums/enums';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsEnum(status_enum)
  status: status_enum;
}
