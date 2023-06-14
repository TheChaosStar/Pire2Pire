import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonRepository } from './lesson.repository';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';

@Module({
  controllers: [LessonController],
  imports: [TypeOrmModule.forFeature([LessonRepository])],
  providers: [LessonService, LessonRepository],
})
export class LessonModule {}
