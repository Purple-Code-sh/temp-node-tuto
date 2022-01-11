// ---------- MODULES ----------

/* Modules are for just execute a file in the console or some other place, but
   that file had other file into it. In other words, its for organize the code and
   split a program in different files, but at the final include al the program in
   just a executable main file.
*/

// Ordinary code whitout modules. All in a file; variables, functions,etc.
const sayHi = (name) => {
  console.log(`Hello there ${name}`);
};
const shm = 'shm';
const shmin = 'shmin';

sayHi('javier');
sayHi(shm);
sayHi(shmin);

// Code whit modules.
const names = require('./04-example-module-1');
const sayHi2 = require('./05-example-module-2');

console.log(names);
console.log(names.shm_mod_1);
console.log(names.shm_mod_2);

// Implementing the alternative module way.
const some_data = require('./06-alternatine-module');
console.log(some_data);

// using 07 mind-grenade
require('./07-mind-grenade');
