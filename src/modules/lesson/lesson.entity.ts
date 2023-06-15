import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { _Module } from '../module/module.entity';
import { _User } from '../user/user.entity';

@Entity('lesson')
export class _Lesson extends BaseEntity {
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

  @ManyToMany(() => _Module, (module) => module.lessons, {
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
  modules?: _Module[];

  @ManyToMany(() => _User, (user) => user.lessons, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  users?: _User[];
}
