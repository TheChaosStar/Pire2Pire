import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('permission')
export class Permission extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The permission unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
  })
  desc: string;
}
