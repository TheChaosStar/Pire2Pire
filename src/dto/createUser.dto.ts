import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { _Formation } from 'src/modules/formation/formation.entity';
import { _Lesson } from 'src/modules/lesson/lesson.entity';

export class CreateUserDto {
  id?: number;

  @IsNotEmpty({ message: 'You should have a firstname' })
  @Length(3, 255)
  firstname: string;

  @IsNotEmpty({ message: 'You should have a lastname' })
  @Length(3, 255)
  lastname: string;

  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Password is Empty' })
  @Length(5, 255)
  password: string;

  role_id?: number;

  formations?: _Formation[];

  lessons?: _Lesson[];
}
