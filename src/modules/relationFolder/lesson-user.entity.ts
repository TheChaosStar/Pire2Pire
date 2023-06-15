import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { _Lesson } from '../lesson/lesson.entity';
import { _User } from '../user/user.entity';

@Entity('lesson-user')
export class ModuleUser {
  @PrimaryColumn({ name: 'lesson_id' })
  lessonId: number;

  @PrimaryColumn({ name: 'user_id' })
  userId: number;

  @ManyToOne(() => _Lesson, (lesson) => lesson.users, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'lesson_id', referencedColumnName: 'id' }])
  lessons: _Lesson[];

  @ManyToOne(() => _User, (user) => user.lessons, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  users: _Lesson[];
}
