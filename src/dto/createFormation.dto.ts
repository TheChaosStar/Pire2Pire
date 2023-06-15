import { IsNotEmpty, Length } from 'class-validator';
import { _Module } from 'src/modules/module/module.entity';
import { _User } from 'src/modules/user/user.entity';

export class CreateFormationDto {
  id?: number;

  @IsNotEmpty({ message: 'requered name' })
  @Length(3, 255)
  name: string;

  @IsNotEmpty({ message: 'requered coach' })
  coach_id: number;

  users?: _User[];

  modules?: _Module[];
}
