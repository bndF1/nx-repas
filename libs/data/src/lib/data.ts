import { Moment } from 'moment';

export interface BaseInterface {
  id: string;
  name: string;
}

export interface Turn extends BaseInterface {
  description: string;
  schedule: ISchedule;
  capacity: number;
  attendees?: Promise<Array<IUser>>;
}

export interface IRepeatableTurn extends Turn {
  weekly?: boolean;
  daily?: boolean;
  onlyWeekends?: boolean;
  avoidWeekends?: boolean;
  // Intend to represent moment weekdays to construct the days
  weekdays?: Array<number>;
}

export interface ISchedule {
  dateTimeFrom: Moment;
  dateTimeTo: Moment;
}

export interface IUser extends BaseInterface {
  surname: string;
  phone?: number;
  email: string;
  password: string;
  turns?: Promise<Array<Turn>>;
}

export interface IWorkspace extends BaseInterface {
  description?: string;
  private?: boolean;
  url?: string;
  ownerId?: string;
  managers?: Array<string>;
}

export interface Bussiness extends IWorkspace {
  owner: string;
  schedule: ISchedule;
  opened?: boolean;
}
