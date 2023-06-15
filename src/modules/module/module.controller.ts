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
import { ModuleService } from './module.service';
import { CreateModuleDto } from 'src/dto/createModule.dto';

@Controller('module')
export class ModuleController {
  constructor(private moduleService: ModuleService) {}
  @Get('/')
  getAllModule() {
    return this.moduleService.getAllModule();
  }

  @Get('/:id')
  getModuleById(@Param('id') id?: string): Promise<any> {
    return this.moduleService.getModuleById(Number(id));
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createModule(@Body() moduleData: CreateModuleDto) {
    return await this.moduleService.createModule(moduleData);
  }
}
