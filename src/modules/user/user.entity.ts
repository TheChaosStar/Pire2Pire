import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Formation } from '../formation/formation.entity';
import { Lesson } from '../lesson/lesson.entity';

@Entity('users')
export class User extends BaseEntity {
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

  @ManyToMany(() => Formation, (formation) => formation.users, {
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
  formations?: Formation[];

  @ManyToMany(() => Lesson, (lesson) => lesson.users, {
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
  lessons?: Lesson[];
}
