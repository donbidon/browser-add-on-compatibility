# Partial compatibility for Mozilla Firefox &amp; Google Chrome add-ons
All files contain code:
```js
if ("undefined" !== typeof(chrome)) {
    var browser = chrome;
}
```
Implements returning Promise in Google Chrome extensions context from following methods:
* browser.runtime:
  - browser.runtime.sendMessage();
* browser.tabs (tabs permission required):
  - browser.tabs.create();
  - browser.tabs.query();
  - browser.tabs.sendMessage();
  - browser.tabs.update();
* browser.storage.&lt;storageArea&gt; (storage permission required):
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
  - &quot;node_modules/browser-add-on-compatibility/src/browser/storage/local.js&quot;;
  - &quot;node_modules/browser-add-on-compatibility/src/browser/storage/managed.js&quot;;
  - &quot;node_modules/browser-add-on-compatibility/src/browser/storage/sync.js&quot;.
