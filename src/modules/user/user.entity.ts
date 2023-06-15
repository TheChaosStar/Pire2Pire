import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { _Formation } from '../formation/formation.entity';
import { _Lesson } from '../lesson/lesson.entity';

@Entity('users')
export class _User extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The user unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  firstname: string;

  @Column({
    type: 'varchar',
  })
  lastname: string;

  @Column({
    type: 'varchar',
    select: false,
  })
  password: string;

  role_id: number;

  @ManyToMany(() => _Formation, (formation) => formation.users, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'formation-user',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'formation_id',
      referencedColumnName: 'id',
    },
  })
  formations?: _Formation[];

  @ManyToMany(() => _Lesson, (lesson) => lesson.users, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'lesson-user',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'lesson_id',
      referencedColumnName: 'id',
    },
  })
  lessons?: _Lesson[];
}
