import { BaseInterface } from '@nxb-repas/data';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity implements BaseInterface {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}
