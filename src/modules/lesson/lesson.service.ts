import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonRepository } from './lesson.repository';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonRepository)
    private lessonRepository: LessonRepository,
  ) {}

  async getAllLesson() {
    return await this.lessonRepository.find();
  }
}
