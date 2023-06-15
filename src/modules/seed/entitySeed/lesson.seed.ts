import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Promise as Bluebird } from 'bluebird';
import { _Lesson } from 'src/modules/lesson/lesson.entity';
import { Seeder } from '../seeder';

@Injectable()
export class LessonsSeeder extends Seeder {
  constructor(
    @InjectRepository(_Lesson)
    private readonly lessons: Repository<_Lesson>,
  ) {
    super();
  }

  async seed() {
    const data: Partial<_Lesson>[] = [];

    for (let i = 0; i < 25; i++) {
      data.push({
        name: '_Lesson ' + i,
        author: i,
        content:
          'Consectetur mollit minim proident ad sit. Dolore aliquip ea reprehenderit veniam nostrud nostrud nulla amet ex elit laborum. Ipsum ea quis sunt commodo anim minim enim ad ipsum enim.',
      });
    }

    await Bluebird.each(data, async (data) => {
      await this.lessons.insert(data);
    });
  }
}
