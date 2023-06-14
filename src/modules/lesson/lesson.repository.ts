import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { CreateLessonDto } from 'src/dto/createLesson.dto';

@Injectable()
export class LessonRepository extends Repository<Lesson> {
  constructor(private dataSource: DataSource) {
    super(Lesson, dataSource.createEntityManager());
  }

  async createLesson({
    name,
    author,
    content,
  }: CreateLessonDto): Promise<Lesson> {
    const task = this.create({
      name,
      author,
      content,
    });

    await this.save(task);
    return task;
  }
}
