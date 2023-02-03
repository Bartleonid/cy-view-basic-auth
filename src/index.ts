/// <reference types="cypress" />
/// <reference types="node" />

interface DeviceList {
	model: string;
	width: number;
	height: number;
}

type Device = object;

type DeviceListArray = Device[];

type Urls = string[];

type Auth = Cypress.Auth;

function prepareTestsForDevices(deviceList: DeviceListArray, auth: Auth) {
	return function setPagesToTest(pageList: Urls, auth: Auth, callback: any): void {
		pageList.forEach((page: string) => {
			context(`${page}`, () => {
				deviceList.forEach((device: DeviceList) => {
					context(`Testing on ${device.model}`, () => {
						beforeEach(() => {
							cy.viewport(device.width, device.height);
							cy.visit(page, auth);
						});

						callback();
					});
				});
			});
		});
	};
}

module.exports = prepareTestsForDevices;
