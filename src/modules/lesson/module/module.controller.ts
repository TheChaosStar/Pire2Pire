import { Controller, Get } from '@nestjs/common';
import { ModuleService } from './module.service';

@Controller('module')
export class ModuleController {
  constructor(private moduleService: ModuleService) {}
  @Get('/')
  getAllModule() {
    return this.moduleService.getAllModule();
  }
}
