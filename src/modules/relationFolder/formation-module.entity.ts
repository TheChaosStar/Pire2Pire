import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { _Module } from '../module/module.entity';
import { _Formation } from '../formation/formation.entity';

@Entity('formation-module')
export class FormationModule {
  @PrimaryColumn({ name: 'module_id' })
  module_id: number;

  @PrimaryColumn({ name: 'formation_id' })
  formationId: number;

  @ManyToOne(() => _Module, (module) => module.formations, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'module_id', referencedColumnName: 'id' }])
  modules: _Module[];

  @ManyToOne(() => _Formation, (formation) => formation.modules, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'formation_id', referencedColumnName: 'id' }])
  formations: _Formation[];
}
