interface DeviceList {
    model: string;
    width: number;
    height: number;
}
declare type Device = object;
declare type DeviceListArray = Device[];
declare type Urls = string[];
declare type BasicAuth = Cypress.Auth;
declare function prepareTestsForDevices(deviceList: DeviceListArray, auth?: BasicAuth): (pageList: Urls, callback: any) => void;
