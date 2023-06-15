import { IsNotEmpty, Length } from 'class-validator';
import { _Formation } from 'src/modules/formation/formation.entity';
import { _Lesson } from 'src/modules/lesson/lesson.entity';

export class CreateModuleDto {
  id?: number;

  @IsNotEmpty({ message: 'requered name' })
  @Length(3, 255)
  name: string;

  formations?: _Formation[];

  lessons?: _Lesson[];
}
