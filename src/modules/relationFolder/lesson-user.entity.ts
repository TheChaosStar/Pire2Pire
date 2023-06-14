import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Lesson } from '../lesson/lesson.entity';
import { User } from '../user/user.entity';

@Entity('lesson-user')
export class ModuleUser {
  @PrimaryColumn({ name: 'lesson_id' })
  lessonId: number;

  @PrimaryColumn({ name: 'user_id' })
  userId: number;

  @ManyToOne(() => Lesson, (lesson) => lesson.users, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'lesson_id', referencedColumnName: 'id' }])
  lessons: Lesson[];

  @ManyToOne(() => User, (user) => user.lessons, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  users: Lesson[];
}
