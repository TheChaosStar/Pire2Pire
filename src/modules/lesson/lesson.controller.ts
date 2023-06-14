import { Controller, Get } from '@nestjs/common';
import { LessonService } from './lesson.service';

@Controller('lesson')
export class LessonController {
  constructor(private lessonService: LessonService) {}
  @Get('/')
  getAllLesson() {
    return this.lessonService.getAllLesson();
  }
}
