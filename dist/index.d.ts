interface DeviceList {
    model: string;
    width: number;
    height: number;
}
declare type Device = object;
declare type DeviceListArray = Device[];
declare type Urls = string[];
declare type BasicAuth = Cypress.Auth;
declare function prepareTestsForDevices(deviceList: DeviceListArray): (pageList: Urls, callback: any, auth?: BasicAuth) => void;
