/**
 * Partial compatibility for Mozilla Firefox & Google Chrome add-ons.
 *
 * Storage permissions required.
 * Returning Promise from methods:
 * - browser.storage.sync.clear();
 * - browser.storage.sync.get();
 * - browser.storage.sync.getBytesInUse();
 * - browser.storage.sync.remove();
 * - browser.storage.sync.set().
 *
 * @copyright <a href="http://donbidon.rf.gd/" target="_blank">donbidon</a>
 * @license   https://opensource.org/licenses/mit-license.php
 */

"use strict";

if ("undefined" !== typeof(chrome)) {
    var browser = chrome;
    let storageArea = browser.storage.sync;

    storageArea._clear_ = storageArea.clear;
    storageArea.clear = function (keys) {
        let storageArea = browser.storage.sync;
        return new Promise((resolve, reject) => {
            try {
                storageArea._clear_();
            } catch (e) {
                reject(e);
            }
        });
    };

    storageArea._get_ = storageArea.get;
    storageArea.get = function () {
        let storageArea = browser.storage.sync;
        return new Promise((resolve, reject) => {
            try {
                switch (arguments.length) {
                    case 0:
                        storageArea._get_(resolve);
                        break;
                    case 1:
                        storageArea._get_(arguments[0], resolve);
                        break;
                    default:
                        throw new Error("Invalid number of arguments");
                }
            } catch (e) {
                reject(e);
            }
        });
    };

    storageArea._getBytesInUse_ = storageArea.getBytesInUse;
    storageArea.getBytesInUse = function () {
        let storageArea = browser.storage.sync;
        return new Promise((resolve, reject) => {
            try {
                switch (arguments.length) {
                    case 0:
                        storageArea._getBytesInUse_(resolve);
                        break;
                    case 1:
                        storageArea._getBytesInUse_(arguments[0], resolve);
                        break;
                    default:
                        throw new Error("Invalid number of arguments");
                }
            } catch (e) {
                reject(e);
            }
        });
    };

    storageArea._remove_ = storageArea.remove;
    storageArea.remove = function (keys) {
        let storageArea = browser.storage.sync;
        return new Promise((resolve, reject) => {
            try {
                storageArea._remove_(keys, resolve);
            } catch (e) {
                reject(e);
            }
        });
    };

    storageArea._set_ = storageArea.set;
    storageArea.set = function (keys) {
        let storageArea = browser.storage.sync;
        return new Promise((resolve, reject) => {
            try {
                storageArea._set_(keys, resolve);
            } catch (e) {
                reject(e);
            }
        });
    };
}
