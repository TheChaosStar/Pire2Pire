import {
  Body,
  Controller,
  Get,
  HttpCode,
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

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createFormation(@Body() formationData: CreateFormationDto) {
    // const formation = await this.userService.getUserById();
    // console.log('====================================');
    // console.log(formation);
    // console.log('====================================');

    return await this.formationService.createNewFormation(formationData);
  }
}
