import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { _Permission } from '../permission/permission.entity';

@Entity('role')
export class _Role extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The role unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  name: string;

  @ManyToMany(() => _Permission, (permission) => permission.roles, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  permissions: _Permission[];
}
