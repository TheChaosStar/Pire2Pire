import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('role')
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The role unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  name: string;
}
