[![GitHub license](https://img.shields.io/github/license/donbidon/core-dev.svg)](https://github.com/donbidon/core-dev/blob/master/LICENSE)
[![Donate to liberapay](http://img.shields.io/liberapay/receives/don.bidon.svg?logo=liberapay)](https://liberapay.com/don.bidon/donate)

# Partial compatibility for Mozilla Firefox &amp; Google Chrome add-ons
All files contain code:
```js
if ("undefined" !== typeof(chrome)) {
    var browser = chrome;
}
```
Implements returning Promise instead of passing callback in Google Chrome extensions context for following methods:
* browser.runtime ([Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime), [Chrome](https://developer.chrome.com/extensions/runtime)):
  - browser.runtime.sendMessage();
* browser.tabs (tabs permission required, [Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs), [Chrome](https://developer.chrome.com/extensions/tabs)):
  - browser.tabs.create();
  - browser.tabs.query();
  - browser.tabs.sendMessage();
  - browser.tabs.update();
* browser.storage.&lt;storageArea&gt; (storage permission required, [Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage), [Chrome](https://developer.chrome.com/extensions/storage)):
  - browser.storage.&lt;storageArea&gt;.clear();
  - browser.storage.&lt;storageArea&gt;.get();
  - browser.storage.&lt;storageArea&gt;.getBytesInUse();
  - browser.storage.&lt;storageArea&gt;.remove();
  - browser.storage.&lt;storageArea&gt;.set().

## Usage
`npm i browser-add-on-compatibility`
* browser.runtime: &quot;node_modules/browser-add-on-compatibility/src/browser/runtime.js&quot;;
* browser.tabs: &quot;node_modules/browser-add-on-compatibility/src/browser/tabs.js&quot;;
* browser.storage:
  - local: &quot;node_modules/browser-add-on-compatibility/src/browser/storage/local.js&quot;;
  - managed: &quot;node_modules/browser-add-on-compatibility/src/browser/storage/managed.js&quot;;
  - sync: &quot;node_modules/browser-add-on-compatibility/src/browser/storage/sync.js&quot;.

### Donate
[YooMoney (ex-Yandex.Money), Visa, MasterCard, Maestro](https://yoomoney.ru/to/41001351141494) or click to the "receives" badge.
