import { DataSource, Repository } from 'typeorm';
import { _Formation } from './formation.entity';
import { Injectable } from '@nestjs/common';
import { CreateFormationDto } from 'src/dto/createFormation.dto';

@Injectable()
export class FormationRepository extends Repository<_Formation> {
  constructor(private dataSource: DataSource) {
    super(_Formation, dataSource.createEntityManager());
  }

  async createFormation({
    name,
    coach_id,
  }: CreateFormationDto): Promise<_Formation> {
    const task = this.create({
      name,
      coach_id,
    });

    await this.save(task);
    return task;
  }
}
