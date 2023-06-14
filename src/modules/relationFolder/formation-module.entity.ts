import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Module } from '../lesson/module/module.entity';
import { Formation } from '../formation/formation.entity';

@Entity('formation-module')
export class FormationModule {
  @PrimaryColumn({ name: 'module_id' })
  module_id: number;

  @PrimaryColumn({ name: 'formation_id' })
  formationId: number;

  @ManyToOne(() => Module, (module) => module.formations, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'module_id', referencedColumnName: 'id' }])
  modules: Module[];

  @ManyToOne(() => Formation, (formation) => formation.modules, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'formation_id', referencedColumnName: 'id' }])
  formations: Formation[];
}
