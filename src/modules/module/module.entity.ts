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

@Entity('modules')
export class _Module extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The module unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  name: string;

  @ManyToMany(() => _Formation, (formation) => formation.modules, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinTable({
    name: 'formation-module',
    joinColumn: {
      name: 'module_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'formation_id',
      referencedColumnName: 'id',
    },
  })
  formations?: _Formation[];

  @ManyToMany(() => _Lesson, (lesson) => lesson.modules, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  lessons?: _Lesson[];
}
