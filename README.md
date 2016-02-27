# insight-client
[![Build Status](https://travis-ci.org/montyanderson/insight-client.svg?branch=master)](https://travis-ci.org/montyanderson/insight-client)
[![Dependency Status](https://david-dm.org/montyanderson/insight-client.svg)](https://david-dm.org/montyanderson/insight-client)
[![npm](https://img.shields.io/npm/v/insight-client.svg)](https://www.npmjs.com/package/insight-client)

A Node.JS client for the Bitcore Insight API.

## Getting Started

```
$ npm install insight-client --save
```

``` javascript
const insight = require("insight-client");

const node = new insight("https://insight.bitpay.com/api");

node.blockIndex(100, function(err, data) {
    console.log(err || data);
});

```

## Endpoints

The endpoints are as listed:

``` javascript
const endpoints = {
    block: "block",
    blockIndex: "block-index",
    tx: "tx",
    rawtx: "rawtx",
    addr: "addr",
    addrs: "addrs",
    txs: "txs",
    sync: "sync",
    peer: "peer"
};
```
