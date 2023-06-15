import { IsNotEmpty, Length } from 'class-validator';
import { _Module } from 'src/modules/module/module.entity';
import { _User } from 'src/modules/user/user.entity';

export class CreateLessonDto {
  id?: number;

  @IsNotEmpty({ message: 'requered name' })
  @Length(3, 255)
  name: string;

  @IsNotEmpty({ message: 'requered author' })
  author: number;

  @IsNotEmpty({ message: 'requered content' })
  @Length(3, 99999)
  content: string;

  modules?: _Module[];

  users?: _User[];
}
