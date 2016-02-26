# insight-client
A Node.JS client for the Bitcore Insight API.

## Getting Started

```
$ npm install insight-client --save
```

``` javascript
const insight = require("./");

const node = new insight("https://insight.bitpay.com/api");

node.blockIndex(100, function(err, data) {
    console.log(err || data);
});

```
