import { IRepeatableTurn } from '@nxb-repas/data';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from '../base-entity';
import { Schedule } from '../schedule/schedule';
import { User } from '../user/user';

@Entity()
export class Turn extends BaseEntity implements IRepeatableTurn {
  @Column({ nullable: true })
  weekly: boolean;

  @Column({ nullable: true })
  daily: boolean;

  @Column({ nullable: true })
  onlyWeekends: boolean;

  @Column({ nullable: true })
  avoidWeekends: boolean;

  @Column({ nullable: true })
  weekdays: number[];

  @Column()
  description: string;

  @JoinColumn()
  @OneToOne(type => Schedule)
  schedule: Schedule;

  @Column()
  capacity: number;

  @JoinColumn()
  @OneToMany(type => User, user => user.name)
  attendees: Promise<User[]>;
}
