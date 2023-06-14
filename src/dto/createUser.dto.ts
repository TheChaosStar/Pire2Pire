import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  id?: number;

  @IsNotEmpty({ message: 'You should have a firstname' })
  @Length(3, 255)
  firstname: string;

  @IsNotEmpty({ message: 'You should have a lastname' })
  @Length(3, 255)
  lastname: string;

  @IsNotEmpty({ message: 'Password is Empty' })
  @Length(5, 255)
  password: string;

  role_id?: number;
}
