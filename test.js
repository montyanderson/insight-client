const insight = require("./");

const node = new insight("https://insight.bitpay.com/api");

node.blockIndex(100, function(err, data) {
    console.log(err || data);
});
