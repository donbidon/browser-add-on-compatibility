/**
 * Partial compatibility for Mozilla Firefox & Google Chrome add-ons.
 *
 * Tabs permissions required.
 * Returning Promise from methods:
 * - browser.tabs.create();
 * - browser.tabs.query();
 * - browser.tabs.sendMessage();
 * - browser.tabs.update().
 *
 * @copyright <a href="http://donbidon.rf.gd/" target="_blank">donbidon</a>
 * @license   https://opensource.org/licenses/mit-license.php
 */

"use strict";

if ("undefined" !== typeof(chrome)) {
    var browser = chrome;

    browser.tabs._create_ = browser.tabs.create;
    browser.tabs.create = function (createProperties) {
        return new Promise((resolve, reject) => {
            try {
                browser.tabs._create_(createProperties, resolve);
            } catch (e) {
                reject(e);
            }
        });
    };

    browser.tabs._query_ = browser.tabs.query;
    browser.tabs.query = function (queryInfo) {
        return new Promise((resolve, reject) => {
            try {
                browser.tabs._query_(queryInfo, resolve);
            } catch (e) {
                reject(e);
            }
        });
    };

    browser.tabs._reload_ = browser.tabs.reload;
    browser.tabs.reload = function () {
        return new Promise((resolve, reject) => {
            try {
                switch (arguments.length) {
                    case 1:
                        browser.tabs._reload_(arguments[0], resolve);
                        break;
                    case 2:
                        browser.tabs._reload_(arguments[0], arguments[1], resolve);
                        break;
                    default:
                        throw new Error("Invalid number of arguments");
                }
            } catch (e) {
                reject(e);
            }
        });
    };

    browser.tabs._sendMessage_ = browser.tabs.sendMessage;
    browser.tabs.sendMessage = function () {
        return new Promise((resolve, reject) => {
            try {
                switch (arguments.length) {
                    case 1:
                        browser.tabs._sendMessage_(arguments[0], resolve);
                        break;
                    case 2:
                        browser.tabs._sendMessage_(arguments[0], arguments[1], resolve);
                        break;
                    case 3:
                        browser.tabs._sendMessage_(arguments[0], arguments[1], arguments[2], resolve);
                        break;
                    default:
                        throw new Error("Invalid number of arguments");
                }
            } catch (e) {
                reject(e);
            }
        });
    };

    browser.tabs._update_ = browser.tabs.update;
    browser.tabs.update = function () {
        return new Promise((resolve, reject) => {
            try {
                switch (arguments.length) {
                    case 1:
                        browser.tabs._update_(arguments[0], resolve);
                        break;
                    case 2:
                        browser.tabs._update_(arguments[0], arguments[1], resolve);
                        break;
                    default:
                        throw new Error("Invalid number of arguments");
                }
            } catch (e) {
                reject(e);
            }
        });
    };
}
