import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { _Module } from '../module/module.entity';
import { _Lesson } from '../lesson/lesson.entity';

@Entity('module-lesson')
export class ModuleUser {
  @PrimaryColumn({ name: 'module_id' })
  moduleId: number;

  @PrimaryColumn({ name: 'lesson_id' })
  lessonId: number;

  @ManyToOne(() => _Module, (module) => module.lessons, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'module_id', referencedColumnName: 'id' }])
  modules: _Module[];

  @ManyToOne(() => _Lesson, (lesson) => lesson.modules, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'lesson_id', referencedColumnName: 'id' }])
  lessons: _Lesson[];
}
