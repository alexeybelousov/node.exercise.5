const crypto = require('crypto');
const fs = require('fs');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt');

input
  .pipe(crypto.createHash('sha1').setEncoding('hex'))
  .on('finish', function () {
    let data = this.read();
    console.log(data)
    output.write(data);
  });

// Эта запись короче но не понятно как вывестиданные в консоль хеш
// input
//   .pipe(crypto.createHash('md5').setEncoding('hex'))
//   .pipe(output);


// Или так? но как получить в стриме записи данные чтобы вывести в консоль?
// const hash = crypto.createHash('sha1').setEncoding('hex');
//
// input
//   .pipe(hash)
//   .pipe(output)
//   .on('finish', function () {
//     console.log(?);
//   });
