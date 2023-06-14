import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Module } from './module/module.entity';
import { User } from '../user/user.entity';

@Entity('lesson')
export class Lesson extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The lesson unique identifier',
  })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column()
  author: number;

  @Column({ type: 'varchar' })
  content: string;

  @ManyToMany(() => Module, (module) => module.lessons, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'module-lesson',
    joinColumn: {
      name: 'lesson_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'module_id',
      referencedColumnName: 'id',
    },
  })
  modules?: Module[];

  @ManyToMany(() => User, (user) => user.lessons, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  users?: User[];
}
