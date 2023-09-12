/* 
TypeScript Special Types
TypeScript has special types that may not refer to any specific type of data.

Type: any
Type: unknown
Type: never
Type: undefined and null

Type: any
any is a type that disables type checking and effectively allows all types to be used.

The example below does not use any and will throw an error:


let u = true;
u = "String";  //Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

Setting any to the special type any disables type checking:

*/

let v: any = true;
console.log("TYPE ANY:",v);
v = "String"; // no error as it can be "any" type
console.log("TYPE ANY:",v);
Math.round(v); // no error as it can be "any" type

/* 
Notice
any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able provide type safety, and tools which rely on type data, such as auto completion, will not work. Remember, it should be avoided at "any" cost...


Type: unknown
unknown is a similar, but safer alternative to any.

TypeScript will prevent unknown types from being used, as shown in the below example:
*/

let w: unknown = 1;
console.log("TYPE UNKNOWN:",w);
w = "String";
console.log("TYPE UNKNOWN:",w);
w = {
  myFunction: () => {
    console.log("TYPE UNKNOWN:","I think therefore I am");
  },
} as { myFunction: () => void };

console.log("TYPE UNKNOWN:",w);

if (typeof w === 'object' && w !== null) { 
    (w as { myFunction: Function }).myFunction();
}

/*
unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.

Casting is when we use the "as" keyword to say property or variable is of the casted type.
*/