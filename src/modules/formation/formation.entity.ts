import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Module } from '../lesson/module/module.entity';

@Entity('formations')
export class Formation extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The formation unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  name: string;

  @OneToOne(() => User, (user) => user.id)
  coach_id: number;

  @ManyToMany(() => User, (user) => user.formations, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  users?: User[];

  @ManyToMany(() => Module, (module) => module.formations, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  modules?: Module[];
}
