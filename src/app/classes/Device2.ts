import { DeviceType2 } from './devicetype2';

export class Device2 {
  deviceID: number;
  serialNumber: string;
  schoolCode: string;
  deviceType: DeviceType2[];

  constructor(
    deviceID: number,
    serialNumber: string,
    schoolCode: string,
    deviceType: DeviceType2[]
  ) {
    this.deviceID = deviceID;
    this.serialNumber = serialNumber;
    this.schoolCode = schoolCode;
    this.deviceType = deviceType;
  }
}
