import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Formation } from '../../formation/formation.entity';
import { Lesson } from '../lesson.entity';

@Entity('modules')
export class Module extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The module unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  name: string;

  @ManyToMany(() => Formation, (formation) => formation.modules, {
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
  formations?: Formation[];

  @ManyToMany(() => Lesson, (lesson) => lesson.modules, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  lessons?: Lesson[];
}
