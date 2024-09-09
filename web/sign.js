var selfsigned = require('selfsigned');
var attrs = [{ name: 'commonName', value: 'localhost' }];
var pems = selfsigned.generate(attrs, { days: 365 });


const fs = require("fs")
fs.writeFileSync("cert.pem", pems.cert, "utf-8")
fs.writeFileSync("key.pem", pems.private, "utf-8")