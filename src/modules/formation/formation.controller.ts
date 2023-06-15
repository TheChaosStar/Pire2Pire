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
import { CreateFormationDto } from 'src/dto/createFormation.dto';
import { FormationService } from './formation.service';

@Controller('formation')
export class FormationController {
  constructor(private formationService: FormationService) {}
  @Get('/')
  getAllFormation() {
    return this.formationService.getAllFormation();
  }

  @Get('/:id')
  getFormationById(@Param('id') id?: string): Promise<any> {
    return this.formationService.getFormationById(Number(id));
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createFormation(@Body() formationData: CreateFormationDto) {
    return await this.formationService.createNewFormation(formationData);
  }
}
