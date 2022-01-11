const patty_cake = require('path');

console.log(patty_cake.sep);

const filePath = patty_cake.join('/09-path-test','subfolder','test.txt')
console.log(filePath);

const base= patty_cake.basename(filePath);
console.log(base);

const absolute = patty_cake.resolve(__dirname,'09-path-test','subfolder','test.txt');
console.log(absolute);