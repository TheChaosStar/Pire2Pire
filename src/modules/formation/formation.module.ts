import { Module } from '@nestjs/common';
import { FormationController } from './formation.controller';
import { FormationRepository } from './formation.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormationService } from './formation.service';

@Module({
  controllers: [FormationController],
  imports: [TypeOrmModule.forFeature([FormationRepository])],
  providers: [FormationService, FormationRepository],
})
export class FormationModule {}
