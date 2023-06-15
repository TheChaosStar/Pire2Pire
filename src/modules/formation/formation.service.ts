import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFormationDto } from 'src/dto/createFormation.dto';
import { FormationRepository } from './formation.repository';
import { _Formation } from './formation.entity';
import { DeleteResult } from 'typeorm';

@Injectable()
export class FormationService {
  constructor(
    @InjectRepository(FormationRepository)
    private formationRepository: FormationRepository,
  ) {}

  async getAllFormation() {
    return await this.formationRepository.find();
  }

  async getFormationById(id: number): Promise<_Formation> {
    return await this.formationRepository.findOneBy({ id: id });
  }

  async createNewFormation(formation: CreateFormationDto) {
    return await this.formationRepository.createFormation(formation);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.formationRepository.delete(id);
  }

  async update(id: number, formation: CreateFormationDto) {
    return await this.formationRepository.update(
      { id },
      {
        name: formation.name,
        coach_id: formation.coach_id,
        modules: formation.modules,
        users: formation.users,
      },
    );
  }
}
