import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFormationDto } from 'src/dto/createFormation.dto';
import { FormationRepository } from './formation.repository';

@Injectable()
export class FormationService {
  constructor(
    @InjectRepository(FormationRepository)
    private formationRepository: FormationRepository,
  ) {}

  async getAllFormation() {
    return await this.formationRepository.find();
  }

  async createNewFormation(formation: CreateFormationDto) {
    return await this.formationRepository.createFormation(formation);
  }
}
