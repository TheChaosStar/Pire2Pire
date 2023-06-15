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

  @Delete('/:id')
  async remove(@Param('id') id?: string): Promise<any> {
    await this.moduleService.remove(parseInt(id));
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() createNewModuleDto: CreateModuleDto) {
    this.moduleService.update(Number(id), createNewModuleDto);
  }
}
