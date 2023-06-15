import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { _Formation } from '../formation/formation.entity';
import { _User } from '../user/user.entity';

@Entity('formation-user')
export class FormationUser {
  @PrimaryColumn({ name: 'user_id' })
  userId: number;

  @PrimaryColumn({ name: 'formation_id' })
  formationId: number;

  @ManyToOne(() => _User, (user) => user.formations, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  users: _User[];

  @ManyToOne(() => _Formation, (formation) => formation.users, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'formation_id', referencedColumnName: 'id' }])
  formations: _Formation[];
}
