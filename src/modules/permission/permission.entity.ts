import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { _Role } from '../role/role.entity';

@Entity('permission')
export class _Permission extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The permission unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
  })
  desc: string;

  @ManyToMany(() => _Role, (role) => role.permissions, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  roles: _Role[];
}
