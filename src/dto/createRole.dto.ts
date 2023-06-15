import { IsNotEmpty, Length } from 'class-validator';
import { _Permission } from 'src/modules/permission/permission.entity';

export class CreateRoleDto {
  id?: number;

  @IsNotEmpty({ message: 'requered name' })
  @Length(3, 255)
  name: string;

  permissions?: _Permission[];
}
