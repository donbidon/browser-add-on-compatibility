# Partial compatibility for Mozilla Firefox &amp; Google Chrome add-ons

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
  - browser.&lt;storageArea&gt;.clear();
  - browser.&lt;storageArea&gt;.get();
  - browser.&lt;storageArea&gt;.getBytesInUse();
  - browser.&lt;storageArea&gt;.remove();
  - browser.&lt;storageArea&gt;.set().
