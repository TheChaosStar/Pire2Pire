import { IsNotEmpty, Length } from 'class-validator';
import { _Role } from 'src/modules/role/role.entity';

export class CreatePermissionDto {
  id?: number;

  @IsNotEmpty({ message: 'requered name' })
  @Length(3, 255)
  name: string;

  @IsNotEmpty({ message: 'requered description' })
  @Length(3, 1500)
  desc: string;

  roles?: _Role[];
}
