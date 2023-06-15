import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
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

  @Delete('/:id')
  async remove(@Param('id') id?: string): Promise<any> {
    await this.formationService.remove(parseInt(id));
  }

  @Put('/:id')
  update(
    @Param('id') id: string,
    @Body() createFormationDto: CreateFormationDto,
  ) {
    this.formationService.update(Number(id), createFormationDto);
  }
}
