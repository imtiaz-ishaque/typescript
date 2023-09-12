/* 

TypeScript Arrays
TypeScript has a specific syntax for typing arrays.

*/

const names: string[] = [];
names.push("Imtiaz"); //no error
console.log(names);
// names.push(100); //Error: Argument of type 'number' is not assignable to parameter of type 'string'.

/* 
Readonly
The readonly keyword can prevent arrays from being changed.
*/

const names1: readonly string[] = ["Imtiaz"];
console.log(names1);
// names1.push("Ahmed"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
