const {readFileSync, writeFileSync} = require('fs') 

// Get the content of a specific file.
const first = readFileSync('./09-path-test/10-first-test.txt','utf8')
const second = readFileSync('./09-path-test/10-second-test.txt','utf8')

console.log(first,second);

// If the file doesnt exist it will create it, if exitst is going to override it.
writeFileSync('./09-path-test/result-sync.txt',`Here is the result: ${first}, ${second}`, {flag:'a'})
// The 'flag' is going to modify the overrinting action, letting the changes visible.