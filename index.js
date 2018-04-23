const crypto = require('crypto');
const fs = require('fs');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt');
const hash = crypto.createHash('md5').setEncoding('hex');

input.pipe(hash);
hash.pipe(output);
hash.pipe(process.stdout);
