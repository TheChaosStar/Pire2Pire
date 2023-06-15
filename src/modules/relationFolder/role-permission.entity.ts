import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { _Role } from '../role/role.entity';
import { _Permission } from '../permission/permission.entity';

@Entity('role-permission')
export class RolePermission {
  @PrimaryColumn({ name: 'role_id' })
  roleId: number;

  @PrimaryColumn({ name: 'permission_id' })
  permissionId: number;

  @ManyToOne(() => _Role, (role) => role.permissions, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'role_id', referencedColumnName: 'id' }])
  roles: _Role[];

  @ManyToOne(() => _Permission, (permission) => permission.roles, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'permission_id', referencedColumnName: 'id' }])
  permission: _Permission[];
}
