import { IsNotEmpty, Length } from 'class-validator';

export class CreateLessonDto {
  id?: number;

  @IsNotEmpty({ message: 'requered name' })
  @Length(3, 255)
  name: string;

  @IsNotEmpty({ message: 'requered author' })
  author: number;

  @IsNotEmpty({ message: 'requered content' })
  @Length(3, 99999)
  content: string;
}
