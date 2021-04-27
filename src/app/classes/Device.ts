import { DeviceType } from '../classes/devicetype';
export class Device {
  deviceID: number;
  serialNumber: string;
  schoolCode: string;
  deviceType: DeviceType;

  constructor(
    deviceID: number,
    serialNumber: string,
    schoolCode: string,
    deviceType: DeviceType
  )
  {
    this.deviceID = deviceID;
    this.serialNumber = serialNumber;
    this.schoolCode = schoolCode;
    this.deviceType = deviceType;
  }
}
