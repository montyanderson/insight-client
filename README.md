# insight-client
[![Build Status](https://travis-ci.org/montyanderson/insight-client.svg?branch=master)](https://travis-ci.org/montyanderson/insight-client)
[![Coverage Status](https://coveralls.io/repos/github/montyanderson/insight-client/badge.svg?branch=master)](https://coveralls.io/github/montyanderson/insight-client?branch=master)
[![Dependency Status](https://david-dm.org/montyanderson/insight-client.svg)](https://david-dm.org/montyanderson/insight-client)
[![devDependency Status](https://david-dm.org/montyanderson/insight-client/dev-status.svg)](https://david-dm.org/montyanderson/insight-client#info=devDependencies)
[![npm](https://img.shields.io/npm/v/insight-client.svg)](https://www.npmjs.com/package/insight-client)
[![node](https://img.shields.io/node/v/insight-client.svg)](https://www.npmjs.com/package/insight-client)

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
