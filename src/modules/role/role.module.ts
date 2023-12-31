import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from './role.repository';
import { RoleService } from './role.service';

@Module({
  controllers: [RoleController],
  imports: [TypeOrmModule.forFeature([RoleRepository])],
  providers: [RoleService, RoleRepository],
})
export class RoleModule {}
