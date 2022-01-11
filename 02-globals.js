// ---------- GLOBALS ----------

// __dirname  - path to current directory.
// __filename - file name.
// require    - function to use modules (CommonJS).
// module     - info about current module (file).
// process    - info about env wthre the program is being executed.

console.log(__dirname);
console.log(__filename);
console.log(module);

// The 'set' functions there are available in node too.

setInterval(() => {
  console.log('every 2 second there is this message');
}, 2000);
