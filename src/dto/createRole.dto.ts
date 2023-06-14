import { IsNotEmpty, Length } from 'class-validator';

export class CreateRoleDto {
  id?: number;

  @IsNotEmpty({ message: 'requered name' })
  @Length(3, 255)
  name: string;
}
