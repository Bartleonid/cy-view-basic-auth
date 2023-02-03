/// <reference types="cypress" />
/// <reference types="node" />
function prepareTestsForDevices(deviceList) {
    return function setPagesToTest(pageList, callback, {auth} = null) {
        pageList.forEach(function (page) {
            context("" + page, function () {
                deviceList.forEach(function (device) {
                    context("Testing on " + device.model, function () {
                        beforeEach(function () {
                            cy.viewport(device.width, device.height);
                            cy.visit(page, {auth});
                        });
                        callback();
                    });
                });
            });
        });
    };
}
module.exports = prepareTestsForDevices;