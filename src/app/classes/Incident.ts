import { Device } from '../classes/device';
export class Incident {
  incidentID: number;
  name: string;
  description: string;
  date: Date;
  solved: Date;
  uid: string;
  device: Device;

  constructor(
    incidentID: number,
    name: string,
    description: string,
    date: Date,
    solved: Date,
    uid: string,
    device: Device
  )
  {
    this.incidentID = incidentID;
    this.name = name;
    this.description = description;
    this.date = date;
    this.solved = solved;
    this.uid = uid;
    this.device = device;
  }
}
