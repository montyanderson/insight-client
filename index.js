'use strict';
const path = require("path");
const request = require("request");

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

const insight = module.exports = function(url) {
    this.url = url;
};

for(let key in endpoints) {
    insight.prototype[key] = function() {
        const args = Array.apply(null, arguments);
        let callback = null;

        if(typeof args[args.length - 1] == "function") {
            callback = args.splice(args.length - 1, 1)[0];
        }

        let url = this.url + "/" + endpoints[key];

        for(let i in args) {
            if(typeof i !== "function") url += "/" + args[i];
        }

        request(url, function(err, res, body) {
            if(err) return callback(err);
            if(callback) callback(null, JSON.parse(body));
        });
    }
}
