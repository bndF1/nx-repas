import { IUser } from '@nxb-repas/data';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../base-entity';
import { Turn } from '../turn/turn';

@Entity()
export class User extends BaseEntity implements IUser {
  @Column({ nullable: false })
  surname: string;

  @Column()
  phone: number;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @OneToMany(type => Turn, turn => turn.name)
  turns: Promise<Turn[]>;
}
