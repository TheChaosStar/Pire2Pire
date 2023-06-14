import { IsNotEmpty, Length } from 'class-validator';

export class CreateFormationDto {
  id?: number;

  @IsNotEmpty({ message: 'requered name' })
  @Length(3, 255)
  name: string;

  @IsNotEmpty({ message: 'requered coach' })
  coach_id: number;
}
