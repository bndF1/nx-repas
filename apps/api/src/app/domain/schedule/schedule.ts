import { ISchedule } from '@nxb-repas/data';
import { Moment } from 'moment';
import { BaseEntity, Column, Entity } from 'typeorm';

@Entity()
export class Schedule extends BaseEntity implements ISchedule {
  @Column()
  dateTimeFrom: Moment;
  @Column()
  dateTimeTo: Moment;
}
