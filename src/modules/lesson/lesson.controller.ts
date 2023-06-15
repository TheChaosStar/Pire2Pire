import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from 'src/dto/createLesson.dto';

@Controller('lesson')
export class LessonController {
  constructor(private lessonService: LessonService) {}
  @Get('/')
  getAllLesson() {
    return this.lessonService.getAllLesson();
  }

  @Get('/:id')
  getLessonById(@Param('id') id?: string): Promise<any> {
    return this.lessonService.getLessonById(Number(id));
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createLesson(@Body() lessonData: CreateLessonDto) {
    return await this.lessonService.createLesson(lessonData);
  }
}
