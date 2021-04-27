export class DeviceType {
  deviceTypeID: number;
  name: string;

  constructor(
    deviceTypeID: number,
    name: string
  )
  {
    this.deviceTypeID = deviceTypeID;
    this.name = name;
  }
}
