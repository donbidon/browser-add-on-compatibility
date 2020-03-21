/**
 * Partial compatibility for Mozilla Firefox & Google Chrome add-ons.
 *
 * Returning Promise from methods:
 * - browser.runtime.sendMessage().
 *
 * @copyright <a href="http://donbidon.rf.gd/" target="_blank">donbidon</a>
 * @license   https://opensource.org/licenses/mit-license.php
 */

"use strict";

if ("undefined" !== typeof(chrome)) {
    var browser = chrome;

    browser.runtime._sendMessage_ = browser.runtime.sendMessage;
    browser.runtime.sendMessage = function () {
        return new Promise((resolve, reject) => {
            try {
                switch (arguments.length) {
                    case 1:
                        browser.runtime._sendMessage_(arguments[0], resolve);
                        break;
                    case 2:
                        browser.runtime._sendMessage_(arguments[0], arguments[1], resolve);
                        break;
                    case 3:
                        browser.runtime._sendMessage_(arguments[0], arguments[1], arguments[2], resolve);
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
