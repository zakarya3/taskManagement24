import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { status_enum } from '../enums/enums';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(status_enum)
  status: status_enum;
}
