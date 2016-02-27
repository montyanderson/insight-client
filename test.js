const assert = require("assert");
const insight = require("./");

const node = new insight("https://insight.bitpay.com/api");

node.blockIndex(100, function(err, data) {
    assert(data.blockHash, "000000007bc154e0fa7ea32218a72fe2c1bb9f86cf8c9ebf9a715ed27fdb229a");
});
