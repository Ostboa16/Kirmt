import { Device2 } from './device2';

export class Incident2 {
  incidentID: number;
  name: string;
  description: string;
  date: Date;
  solved: Date;
  uid: string;
  device: Device2;

  constructor(
    incidentID: number,
    name: string,
    description: string,
    date: Date,
    solved: Date,
    uid: string,
    device: Device2
  ) {
    this.incidentID = incidentID;
    this.name = name;
    this.description = description;
    this.date = date;
    this.solved = solved;
    this.uid = uid;
    this.device = device;
  }
}
