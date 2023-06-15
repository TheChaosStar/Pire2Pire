import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonRepository } from './lesson.repository';
import { _Lesson } from './lesson.entity';
import { CreateLessonDto } from 'src/dto/createLesson.dto';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonRepository)
    private lessonRepository: LessonRepository,
  ) {}

  async getAllLesson() {
    return await this.lessonRepository.find();
  }

  async getLessonById(id: number): Promise<_Lesson> {
    return await this.lessonRepository.findOneBy({ id: id });
  }

  async createLesson(lesson: CreateLessonDto) {
    return await this.lessonRepository.createLesson(lesson);
  }
}
