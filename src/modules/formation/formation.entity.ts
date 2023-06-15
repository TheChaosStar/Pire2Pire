import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { _User } from '../user/user.entity';
import { _Module } from '../module/module.entity';

@Entity('formations')
export class _Formation extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The formation unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  name: string;

  @OneToOne(() => _User, (user) => user.id)
  coach_id: number;

  @ManyToMany(() => _User, (user) => user.formations, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  users?: _User[];

  @ManyToMany(() => _Module, (module) => module.formations, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  modules?: _Module[];
}
